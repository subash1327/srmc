import React from 'react';
import ParticipantView from './Participant';
import type { Participant } from '../../../../src/index';

export default function ParticipantGrid({ participants }: { participants: Participant[] }) {
  return (
    <div id="participants-area" style={{ height: '92%', width: '100%' }}>
      {participants.map((p) => (
        <ParticipantView key={p.identity} participant={p} />
      ))}
    </div>
  );
}
