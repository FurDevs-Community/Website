export const __prod__ = process.env.NODE_ENV === 'production'
export const api = __prod__ ? "https://api.furdevs.tech" : "http://localhost:8080"