import { Router, Request, Response } from 'express'
const router = Router();

router.post("/twitter/webhook", (req: Request, res: Response) => {
    console.log("request: ", req);
    res.send({ status: 200 })
})

export default router