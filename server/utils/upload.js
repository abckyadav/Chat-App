import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const url = process.env.MONGODB_URL;

// Create a storage object with a given configuration
const storage = new GridFsStorage({
  url,
  file: (req, file) => {
    console.log("file:", file);
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${file.originalname}`;
    }

    return {
      bucketName: "fs",
      fileName: `${file.originalname}`,
    };
  },
});

export default multer({ storage });
