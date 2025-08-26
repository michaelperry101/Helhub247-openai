# Helphub247 v7 (OpenAI integrated)

This package is a demo Next.js App Router project with client-chat UI and server API endpoints that call OpenAI.
- Add your OpenAI key as environment variable `OPENAI_API_KEY` (and optionally `OPENAI_MODEL` like 'gpt-4o-mini' or a newer model).
- Deploy to Vercel or Netlify (Vercel recommended for Next.js API routes).

## Local run
1. npm install
2. Add .env.local with:
   OPENAI_API_KEY=sk-...
   OPENAI_MODEL=gpt-4o-mini
3. npm run dev

## Notes
- If OPENAI_API_KEY is missing, the app runs in demo mode with safe placeholder replies and images so the build will succeed.
- The chat UI uses browser SpeechSynthesis for TTS (British accent where available).
