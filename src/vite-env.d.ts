/// <reference types="vite/client" />

declare global {
  namespace NodeJs {
    interface ProcessEnv {
      API_TOKEN: string
    }
  }
}
