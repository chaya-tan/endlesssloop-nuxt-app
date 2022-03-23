import { Router, Request, Response } from 'express'
import { validateSignature as lineBotValidateSignature, WebhookRequestBody } from "@line/bot-sdk"
import crypto from 'crypto'

const router = Router();

const path = "/line/webhook"

const lineConfig = {
  chennelAcessToken: process.env.LINE_CHANNEL_ACESS_TOKEN || "",
  channelSecret: process.env.LINE_CHANNEL_SECRET || ""
}

router.post(path, (req: Request<{}, {}, WebhookRequestBody>, res: Response) => {
    const lineSignature = crypto.createHmac('SHA256', lineConfig.channelSecret).update(JSON.stringify(req.body)).digest('base64');
    const isValidated = lineBotValidateSignature(JSON.stringify(req.body), lineConfig.channelSecret, lineSignature)

    if(isValidated) {
      const allMessageEvents = req.body.events.filter(event => event.type === "message")
      console.log(`Total Message recieved: ${allMessageEvents.length}`)
    }

    res.status(200).send({success: true})
})

export default router
