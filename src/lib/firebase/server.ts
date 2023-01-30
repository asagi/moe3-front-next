import firebaseAdmin from 'firebase-admin';

if (firebaseAdmin.apps.length === 0) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    })
  });
}

export { firebaseAdmin };
