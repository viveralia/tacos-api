import type { SwaggerOptions } from "swagger-ui-express";

import { env } from './env'
import packageJson from '../../package.json'

export const options: SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: '🌮 Tacos API 🌮',
      version: packageJson.version,
      description: 'A simple, yet delicious API for practicing CRUD operations'
    },
    servers: [{ url: env.server }],
  },
  apis: ['./src/**/*.routes.ts']
}
