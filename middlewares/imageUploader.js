import "dotenv/config";
import multer from "multer";
import FirebaseStorage from "multer-firebase-storage";

const storage = FirebaseStorage({
  bucketName: process.env.FIREBASE_BUCKETNAME,
  credentials: {
    clientEmail: process.env.FIREBASE_CLIENTEMAIL,

    privateKey: process.env.FIREBASE_PRIVATEKEY,

    projectId: process.env.FIREBASE_PROJECTID,
  },
  public: true,
  unique: true,
});

const imageUploader = multer({ storage });

export default imageUploader;
