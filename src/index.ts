import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import { env } from './config/env'
import tacosRouter from './tacos/tacos.routes'
import { options } from './config/swagger'

const app = express()

app.set('port', env.port)

app.use(cors({ origin: '*' }))
app.use(morgan('tiny') as any)
app.use(express.json() as any)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))
app.use('/tacos', tacosRouter)

app.listen(app.get('port'))
console.log(`🚀 Server listening on port: ${app.get('port')}`)
