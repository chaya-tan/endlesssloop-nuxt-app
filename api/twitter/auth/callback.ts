import { Router, Request, Response } from 'express'

const router = Router();

const path = "/twitter/auth/callback"

router.get(path, (req: Request, res: Response) => {
    console.log("request: ", req);
    res.status(200).send(req.query)
})

router.post(path, (req: Request, res: Response) => {
    console.log("request: ", req);
    res.status(200)
})

export default router