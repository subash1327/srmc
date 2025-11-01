import React from 'react';
import { useRoom } from './hooks/useRoom';
import ParticipantGrid from './components/ParticipantGrid';
import Controls from './components/Controls';
import Chat from './components/Chat';

export default function App() {
  const roomHook = useRoom();

  return (
    <div className="app-container">
      <div className="app-main">
        <ParticipantGrid participants={roomHook.participants} />
        <div className="video-call-actions">
          <Controls
            onToggleAudio={roomHook.toggleAudio}
            onToggleVideo={roomHook.toggleVideo}
            micEnabled={roomHook.isMicEnabled}
            videoEnabled={roomHook.isCameraEnabled}
          />
        </div>
      </div>
      <div className="right-side show">
        <Chat messages={roomHook.messages} onSend={roomHook.sendText} />
      </div>
    </div>
  );
}
