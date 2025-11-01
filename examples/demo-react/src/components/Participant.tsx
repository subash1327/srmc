import React, { useEffect, useRef, useState } from 'react';
import type { Participant, TrackPublication, Track } from '../../../../src/index';
import { isLocalParticipant, Track as Source } from '../../../../src/index';

export default function ParticipantView({ participant }: { participant: Participant }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    function onIsSpeakingChanged() {
      setIsSpeaking(participant.isSpeaking);
    }

    participant.on('isSpeakingChanged', onIsSpeakingChanged as any);

    // subscribe to camera track if available
    const camPub = participant.getTrackPublication(Source.Source.Camera);
    if (camPub && camPub.videoTrack && videoRef.current) {
      camPub.videoTrack.attach(videoRef.current);
    }

    const micPub = participant.getTrackPublication(Source.Source.Microphone);
    if (micPub && micPub.audioTrack && audioRef.current && !isLocalParticipant(participant)) {
      micPub.audioTrack.attach(audioRef.current);
    }

    const onTrackSubscribed = (_track: any, _pub: TrackPublication) => {
      // re-render by toggling state
      setTimeout(() => setIsSpeaking((s) => s), 0);
    };

    participant.on('trackSubscribed', onTrackSubscribed as any);
    participant.on('trackUnsubscribed', onTrackSubscribed as any);

    return () => {
      participant.off('isSpeakingChanged', onIsSpeakingChanged as any);
      participant.off('trackSubscribed', onTrackSubscribed as any);
      participant.off('trackUnsubscribed', onTrackSubscribed as any);
      // detach
      if (camPub && camPub.videoTrack && videoRef.current) {
        camPub.videoTrack.detach(videoRef.current);
      }
      if (micPub && micPub.audioTrack && audioRef.current) {
        micPub.audioTrack.detach(audioRef.current);
      }
    };
  }, [participant]);

  return (
    <div className={`participant ${isSpeaking ? 'speaking' : ''}`} id={`participant-${participant.identity}`}>
      <video id={`video-${participant.identity}`} ref={videoRef} autoPlay playsInline muted={isLocalParticipant(participant)} />
      <audio id={`audio-${participant.identity}`} ref={audioRef} autoPlay />
      <div className="info-bar">
        <div id={`name-${participant.identity}`} className="name">
          {participant.identity} {isLocalParticipant(participant) ? '(you)' : ''}
        </div>
        <div className="right">
          <span id={`signal-${participant.identity}`}></span>
          <span id={`mic-${participant.identity}`}></span>
        </div>
      </div>
    </div>
  );
}
