
import WebPush from "web-push";
import { FastifyInstance } from "fastify"
import { z } from "zod";

const publicKey = "BAWtgrxJIST4L-G-_9ZKgHeSngYgDkTy9e6nYMGOAgQ09wQpBjeBh_SKrN37OcO8PtvlS-MOX7o-D8j4Td6O_1Y";
const privateKey = "bnnQiwzG1PILQlXIFkkJm8slZ8Y_oKof85N5_0k-OVU"

WebPush.setVapidDetails(
    'http://localhost:3333',
    publicKey,
    privateKey
)

export async function notificationRoutes(app: FastifyInstance) {

    app.get('/push/public_key', () => {
        return {
            publicKey
        }
    })

    // associa o Id do usuário do frontend com o Id do usuário backend
    app.post('/push/register', (request, reply) => {
        console.log(request.body)
        return reply.status(201).send()
    })


    app.post('/push/send', async (request, reply) => {
        const sendPushBody = z.object({
            subscription: z.object({
                endpoint: z.string(),
                keys: z.object({
                    p256dh: z.string(),
                    auth: z.string()
                })
            })
            
        })
        const { subscription } = sendPushBody.parse(request.body)

        setTimeout(() => {
            WebPush.sendNotification(subscription, 'Hello from backend')
        }, 5000)

        return reply.status(201).send()
    })
}