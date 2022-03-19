import { Router, Request, Response } from 'express'

const router = Router();

const path = "/line/webhook"

router.post(path, (req: Request, res: Response) => {
    console.log("request: ", req);
    res.status(200)
})

export default router