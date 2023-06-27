import { NextFunction, Request, Response } from "express";

export function checkNotionToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']
    if (!token) {
        res.writeHead(401, { 'content-type': 'application/json' })
        res.write(JSON.stringify({
            msg: 'Authorization is required',
        }))
        res.end()
        return
    }

    let cleanToken = token.toString().replace('Bearer', '').trim()
    req.headers['authorization'] = cleanToken
    next();
}