import { Router, Request, Response } from 'express'
import axios from 'axios';

const router = Router();

const path = "/twitter/user/show"

router.get(path, (req: Request, res: Response) => {
    const twitterAccount = "kreme_q";

    if(!process.env.TWITTER_BEARER_TOKEN) {
        res.status(400).send("Twitter Bearer Token Not found");
        return;
    }
    if(!process.env.TWITTER_API_KEY) {
        res.status(400).send("Twitter API Key Not found");
        return;
    }

    if(!process.env.TWITTER_API_KEY_SECRET) {
        res.status(400).send("Twitter Key Secret Not found");
        return;
    }

    try {
        const requestUrl = `https://api.twitter.com/1.1/users/show.json?screen_name=${twitterAccount}`
        console.log("requestUrl",requestUrl)
        axios
            .get(requestUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
                }
            }).then(userResponse => {
                res.status(200).send(userResponse)
                return;
            }).catch(error => {
                res.status(400).send(error)
                return;
            })
    } catch(error) {
        res.status(400).send(error);
        return;
    }
})

router.post(path, (req: Request, res: Response) => {
    console.log("request: ", req);
    res.status(200)
})

export default router