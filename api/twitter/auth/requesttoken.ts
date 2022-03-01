import { Router, Request, Response } from 'express'
import axios from 'axios';
import addOAuthInterceptor, { OAuthInterceptorConfig } from "axios-oauth-1.0a";
import qs from 'querystring'

const router = Router();

const path = "/twitter/auth/requesttoken"

router.get(path, (req: Request, res: Response) => {
    if(!process.env.TWITTER_API_KEY) {
        res.status(400).send("Twitter API Key Not found");
        return;
    }

    if(!process.env.TWITTER_API_KEY_SECRET) {
        res.status(400).send("Twitter Key Secret Not found");
        return;
    }

    try {
        const requestUrl = "https://api.twitter.com/oauth/request_token"

        const axiosClient = axios.create();
        const options: OAuthInterceptorConfig = {
            algorithm: "HMAC-SHA1",
            key: process.env.TWITTER_API_KEY,
            secret: process.env.TWITTER_API_KEY_SECRET,
            token: process.env.TWITTER_ACCESS_TOKEN,
            tokenSecret: process.env.TWITTER_ACCEDD_TOKEN_SECRET,
            callback: 'https://endlesssloop-nuxt-app.vercel.app/api/twitter/webhook',
        };
        addOAuthInterceptor(axiosClient, options);
        
        axiosClient.request({
            method: "POST",
            url: requestUrl
          }).then(tokenResponse => {
            try {
                const rawTokenString = tokenResponse.data
                res.status(200).send((qs.parse(rawTokenString)))
            } catch(error) {
                res.status(400).send(error)
            }
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