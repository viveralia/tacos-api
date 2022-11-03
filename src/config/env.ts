import dotenv from 'dotenv'

dotenv.config()

export const env = {
  port: process.env.PORT,
  server: process.env.SERVER
}
