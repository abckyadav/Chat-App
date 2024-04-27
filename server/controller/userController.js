import userModel from "../model/userModel.js";

export const addUser = async (req, res) => {
  try {
    let existedUser = await userModel.findOne({ sub: req.body.sub });

    if (existedUser) {
      return res.status(200).json({ msg: "User already exists" });
    }

    const newUser = new userModel(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json("error in addUSer Controller:", error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json("error in getUser Controller:", error.message);
  }
};
