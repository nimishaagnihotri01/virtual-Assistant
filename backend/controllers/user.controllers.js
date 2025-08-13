import User from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId; // set in middleware (isAuth.js)

    if (!userId) {
      return res.status(400).json({ message: "User ID not found in request" });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Get current user error" });
  }
};
