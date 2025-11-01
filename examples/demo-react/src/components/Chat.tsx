import React, { useState } from 'react';

export default function Chat({ messages, onSend }: any) {
  const [entry, setEntry] = useState('');

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chat</h3>
      </div>
      <div className="chat-area">
        <textarea className="form-control" rows={10} value={messages.join('\n')} readOnly />
        <div id="chat-input-area">
          <input type="text" className="form-control" id="entry" placeholder="Type your message here" value={entry} onChange={(e) => setEntry(e.target.value)} />
          <button className="btn btn-primary" onClick={() => { if (entry.trim()) { onSend(entry); setEntry(''); }}}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
