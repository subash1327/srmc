SRMC - Demo React

This folder contains a Vite + React demo that re-implements the original `examples/demo` UI using React components.

Quick start (from repository root):

1. cd examples/demo-react
2. pnpm install
3. pnpm dev

Notes:
This demo uses the same in-repo `src` library via relative imports (e.g. `../../../../src/index` from component files). That means the demo is intended to be run from within this repository so the local library is available to the bundler.
- For simplicity the demo creates an AccessToken in the browser using the API key/secret (copied from the original demo). This is insecure for production. In real deployments you must mint tokens server-side.
- The React demo focuses on core functionality: connecting, rendering participants, toggling audio/video, and chat. You can extend components in `src/components`.
