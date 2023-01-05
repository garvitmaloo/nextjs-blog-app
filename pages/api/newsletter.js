import { getAllUsers } from "../../helper/API/utilities";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    const allUsers = await getAllUsers();
    const reqUser = allUsers.find((user) => user.email === email);

    if (reqUser) {
      return res
        .status(403)
        .json({ message: "User has already been registered." });
    }

    if (!reqUser) {
      try {
        await fetch(
          `https://next-travel-blog-default-rtdb.firebaseio.com/users.json`,
          {
            method: "POST",
            body: JSON.stringify({ name, email }),
          }
        );

        return res.status(201).json({ message: "You have been registered" });
      } catch (err) {
        return res.status(404).json({
          message: "Failed to subscribe a new user",
          error: err.message,
        });
      }
    }
  }
}
