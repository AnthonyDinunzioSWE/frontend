import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "0b57e72a2c7303e4fea36f5562a88fc3ac91f948",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "gymsync-11f70",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
