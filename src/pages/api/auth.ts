import { NextApiRequest, NextApiResponse } from 'next';

type AuthResponse = {
  status: number;
  data: {
    token: string;
    admin: boolean;
  };
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // TODO: use axios
  new Promise<AuthResponse>((resolve) => {
    resolve({
      status: 200,
      data: { token: 'dummytoken', admin: false }
    });
  })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((response) => {
      console.log(response.data);
    });
}
