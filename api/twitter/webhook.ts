import { Router, Request, Response } from 'express'
const router = Router();

router.use("/hello", (req: Request, res: Response) => {
    console.log("request: ", req);
    res.end('Hello world!')
})

export default router