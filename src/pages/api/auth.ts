import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { moeApi } from '@/lib/apiUtils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const twid = req.body.twid;
  const body = req.body;
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + req.body.token
    }
  };

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
      }
      return Promise.reject(error);
    }
  );

  axios.put(moeApi('/users/' + twid), body, headers).then((response) => {
    return res.status(response.status).json(response.data);
  });
}
