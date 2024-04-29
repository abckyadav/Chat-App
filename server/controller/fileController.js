import mongoose from "mongoose";
import grid from "gridfs-stream";

const url = "http://localhost:8080";
const conn = mongoose.connection;

let gfs, gridfsBucket;

conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });

  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(404).json("File not found");
  }

  const ImageUrl = `${url}/file/${req.file.filename}`;

  return res.status(200).json(ImageUrl);
};

export const getFile = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
