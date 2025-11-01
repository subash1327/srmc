import { useEffect, useState, useCallback } from 'react';
import { AccessToken } from 'livekit-server-sdk';
import { Room as LR, Participant, RoomOptions, RoomConnectOptions } from '../../../../src/index';
import { Room, RoomEvent, Track } from '../../../../src/index';
import { publishDefaults } from '../../../../src/room/defaults';

const LIVEKIT_API_KEY = 'APIWGjbsqnHQQeT';
const LIVEKIT_API_SECRET = '1h8YLAP4VbaIaZhPHaeymTLIUvuX9Zyuim85pDT666K';
const LIVEKIT_URL = 'wss://stream.fanly.social';

export function useRoom() {
  const [room, setRoom] = useState<LR | undefined>(undefined);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      if (room) room.disconnect();
    };
  }, [room]);

  const rebuildParticipants = useCallback((r?: LR) => {
    if (!r) {
      setParticipants([]);
      return;
    }
    const arr = [...r.remoteParticipants.values()];
    arr.unshift(r.localParticipant);
    setParticipants(arr as Participant[]);
  }, []);

  const connectUser = useCallback(async (identity = 'user', roomName = 'room') => {
    const tt = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, { identity });
    tt.addGrant({ room: roomName, roomJoin: true, canPublish: true, canSubscribe: true });
    const token = await tt.toJwt();

    console.log(token)

    const roomOpts: RoomOptions = {
      // minimal defaults -- you can extend
      publishDefaults: {},
    } as any;
    const connectOpts: RoomConnectOptions = { autoSubscribe: true, rtcConfig: {
        iceTransportPolicy: 'relay',
      }  } as any;

    const r = new Room(roomOpts);
    setRoom(r);

    r.on(RoomEvent.ParticipantConnected, (p) => {
      rebuildParticipants(r);
    });
    r.on(RoomEvent.ParticipantDisconnected, (p) => {
      rebuildParticipants(r);
    });
    r.on(RoomEvent.LocalTrackPublished, () => {
      rebuildParticipants(r);
    });
    r.on(RoomEvent.TrackSubscribed, () => rebuildParticipants(r));
    r.on(RoomEvent.TrackUnsubscribed, () => rebuildParticipants(r));

    r.on(RoomEvent.ChatMessage, (msg, participant) => {
      setMessages((m) => [...m, `${participant?.identity ?? 'unknown'}: ${msg.message}`]);
    });

    try {
      await r.prepareConnection(LIVEKIT_URL, token);
      await r.connect(LIVEKIT_URL, token, connectOpts);
    } catch (e) {
      console.error('connect error', e);
      return;
    }

    rebuildParticipants(r);
    return r;
  }, [rebuildParticipants]);

  // auto-start connect on mount (like old demo)
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('id') || 'user';
    const roomName = new URLSearchParams(window.location.search).get('room') || 'room';
    connectUser(id, roomName);
  }, [connectUser]);

  const toggleAudio = useCallback(async () => {
    if (!room) return;
    const enabled = room.localParticipant.isMicrophoneEnabled;
    await room.localParticipant.setMicrophoneEnabled(!enabled);
    rebuildParticipants(room);
  }, [room, rebuildParticipants]);

  const toggleVideo = useCallback(async () => {
    if (!room) return;
    const enabled = room.localParticipant.isCameraEnabled;
    await room.localParticipant.setCameraEnabled(!enabled);
    rebuildParticipants(room);
  }, [room, rebuildParticipants]);

  const sendText = useCallback(async (text: string) => {
    if (!room) return;
    room.localParticipant.sendText(text, { topic: 'chat' });
    setMessages((m) => [...m, `${room.localParticipant.identity}: ${text}`]);
  }, [room]);

  return {
    room,
    participants,
    messages,
    connectUser,
    toggleAudio,
    toggleVideo,
    sendText,
    isMicEnabled: !!room?.localParticipant.isMicrophoneEnabled,
    isCameraEnabled: !!room?.localParticipant.isCameraEnabled,
  };
}
