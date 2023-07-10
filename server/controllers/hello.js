import { receive } from "../smtp/receive.js";
import { Sent } from "../smtp/send.js";
export const sendHello = async (req, res) => {
  const message = req.body.message;
  const name = req.body.name;
  const email = req.body.email;

  console.log(`sendHello ${name} ${email} ${message}`);

  if (!email || !name || !message) {
    return res
      .status(400)
      .json({ message: "Please fill the form properly with all fields" });
  }

  // receiving email from client

  const emailReceived = await receive(email, message);
  if (!emailReceived) {
    return res.status(500).json({ message: "Internal server error" });
  }
  //   return res.status(200).json({ message: "Hi  message received!" });

  //sending automated response to client
  const response = await Sent(email, name);

  return res.status(200).json({ message: "Thanks for contacting" });
};
