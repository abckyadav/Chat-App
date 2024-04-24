import User from "../model/userModel.js";

export const addUser = async (req, res) => {
  try {
    let existedUser = await User.findOne({ sub: req.body.sub });

    if (existedUser) {
      return res.status(200).json({ msg: "User already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    console.log("error in addUSer Controller:", error.message);
  }

  console.log("adduser", req.body);
};

export const getUser = async (req, res) => {
  try {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getUser Controller:", error.message);
  }
};
