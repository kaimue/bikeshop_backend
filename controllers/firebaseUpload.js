import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "../firebaseConfig.js";

const db = initializeApp(firebaseConfig);

const storage = getStorage(db);
// const storage = firebase.storage().ref(); // create a reference to storage
// const storageRef = ref(storage);

// export const firebaseload = uploadBytes(storageRef, file).then((snapshot) => {
//   console.log("Uploaded a blob or file!");
// });

export const firebaseUpload = async (req, res) => {
  const file = req.file;
  const storageRef = ref(file);
  uploadBytes(storageRef).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
  const downloadURL = await snapshot.ref.getDownloadURL();

  res.send(downloadURL);
};
