import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { moeApi } from '~/lib/apiUtils';
import { firebaseAdmin } from '~/lib/firebase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('/api/auth called');
  const twid = req.body.twid;
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.body.token}`
    }
  };

  try {
    const response = await axios.put(moeApi(`/users/${twid}`), req.body, headers);
    await firebaseAdmin.auth().setCustomUserClaims(req.body.uid, response.data);
    return res.status(response.status).json(response.data);
  } catch (error) {
    // TODO: error handling
    console.log(error);
  }
}
