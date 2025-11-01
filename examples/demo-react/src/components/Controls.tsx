import React from 'react';

export default function Controls({ onToggleAudio, onToggleVideo, micEnabled, videoEnabled }: any) {
  return (
    <>
      <button className="video-action-button mic" onClick={onToggleAudio} id="toggle-audio-button">
        <i id="micIcon" className={`fa ${micEnabled ? 'fa-microphone' : 'fa-microphone-slash'}`} />
      </button>

      <button className="video-action-button camera" onClick={onToggleVideo} id="toggle-video-button">
        <i id="cameraIcon" className={`fa ${videoEnabled ? 'fa-video' : 'fa-video-slash'}`} />
      </button>
    </>
  );
}
