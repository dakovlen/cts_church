import {NextApiResponse, NextApiRequest} from "next";

interface GetByIdNexApiRequest extends NextApiRequest {
    query: {
        id?: string
    }}

export default function getById(req:NextApiRequest, res: NextApiResponse) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(req.query.id)
}