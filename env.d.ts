declare namespace NodeJS {
    interface ProcessEnv {
        DEBUG: string
        PORT: string
        MONGO_URI: string
        JWT_KEY: string
    }
}
