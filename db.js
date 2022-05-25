import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebaseConfig.js";

export const db = initializeApp(firebaseConfig);
