import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.js";

const db = initializeApp(firebaseConfig);

export default db;
