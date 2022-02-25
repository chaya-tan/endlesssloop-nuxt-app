import { Router, Request, Response } from 'express'
import axios, { AxiosResponse } from "axios"

const router = Router();

const path = "/telegram/participantscount"

router.get(path, (req: Request, res: Response) => {
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN || "";
    const testChannelID = "-798921618"

    axios
        .get(`https://api.telegram.org/bot${botToken}/getChatMemberCount?chat_id=${testChannelID}`)
        .then((chatMemberCountresponse: AxiosResponse<{ok: boolean; result: number}>) => {
            const { ok, result } = chatMemberCountresponse.data
            if(!ok)  {
                res.status(400).send({error: "Chat Member request error"})
            }
            const chatMemberCount = result
            res.status(200).send({ chatMemberCount })
        })
        .catch(error => {
            res.status(400).send({error})
        })
})

router.post(path, (req: Request, res: Response) => {
    console.log("request: ", req);
    res.status(200)
})

export default router