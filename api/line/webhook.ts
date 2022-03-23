import { Router, Request, Response } from 'express'

const router = Router();

const path = "/line/webhook"

const lineChannelSecret = process.env.LINE_CHANNEL_SECRET

router.post(path, (req: Request, res: Response) => {
    console.log("Req Body: ", req.body);
    console.log("Req Header: ", req.header);
    console.log("lineChannelSecret", lineChannelSecret)
    res.status(200).send({success: true})
})

export default router

// const crypto = require('crypto');

// const channelSecret = '...'; // Channel secret string
// const body = '...'; // Request body string
// const signature = crypto
//   .createHmac('SHA256', channelSecret)
//   .update(body).digest('base64');
// // Compare x-line-signature request header and the signature
