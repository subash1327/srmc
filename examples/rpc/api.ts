import dotenv from 'dotenv';
import express from 'express';
import type { Express } from 'express';
import { AccessToken } from 'livekit-server-sdk';

dotenv.config({ path: '.env.local' });

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || 'APIo9Aw99v4QVna';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || 'abMMSeUuou1hDZHlYNFxkRPrK7Ikk9yeO0dY0WbDIxI';
const LIVEKIT_URL = process.env.LIVEKIT_URL || 'wss://howdy-agew68tz.livekit.cloud';

const app = express();
app.use(express.json());

app.post('/api/get-token', async (req, res) => {
  const { identity, roomName } = req.body;

  if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET) {
    res.status(500).json({ error: 'Server misconfigured' });
    return;
  }

  const token = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
    identity,
  });
  token.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
  });

  res.json({
    token: await token.toJwt(),
    url: LIVEKIT_URL,
  });
});

// serve a static folder
app.use('/video', express.static('../demo'));

export const handler: Express = app;
