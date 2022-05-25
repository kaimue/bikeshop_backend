import multer from "multer";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.fieldname);
//   },
// });

const storage = multer.memoryStorage();
export const multerUpload = multer({ storage: storage }).single("image");
