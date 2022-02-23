import { Router, Request, Response, RequestHandler } from 'express'
import crypto from 'crypto'

const router = Router();

const path = "/twitter/webhook"

const twitterCRCTokenCalculator  = (crcToken: string, twitterConsumerSecret: string): string => {
    return crypto.createHmac('sha256',twitterConsumerSecret).update(crcToken).digest('base64')
}

// Twitter Challenge Response Check
router.get(path, (req: Request, res: Response) => {
    if(!req.query.crc_token) {
        res.status(400).send("CRC Token not found");
        return;
    }

    if(!process.env.TWITTER_API_KEY_SECRET) {
        res.status(400).send("Twitter Key Secret Not found");
        return;
    }

    const crcToken =  req.query.crc_token as string

    try {
        res.status(200)
            .send({response_token: `sha256=${twitterCRCTokenCalculator(crcToken, process.env.TWITTER_API_KEY_SECRET)}`})
    } catch(error) {
        res.status(400).send("CRC Calculation Failed");
    }
})

router.post(path, (req: Request, res: Response) => {
    console.log("request: ", req);
    res.status(200)
})

export default router