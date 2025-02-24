import type { NextApiRequest, NextApiResponse } from "next";

type Data = Book[]

//type
type Book = {
    id: number;
    name: string;
    title: string;
}

const booksDB = [
    {id: 1, name: "Yang Silver Pony", title: "Pony"},
    {id: 2, name: "MiddleAge Purple Bее", title: "Bее"},
    {id: 3, name: "Old Red Pony", title: "Pony"},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if(req.method === 'GET') {
        let books = booksDB;

        const term = req.query.term as string;

        if(term)  {
            books = books.filter((book) => book.title.toLowerCase().includes(term.toLowerCase()));
        }

        res.status(200).json(books);
    }
}