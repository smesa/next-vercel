import { NextApiRequest, NextApiResponse } from './../../node_modules/next/dist/shared/lib/utils.d';

type Data = {
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
