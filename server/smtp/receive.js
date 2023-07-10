import nodemailer from "nodemailer";

export const receive = (email, sub) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "http://localhost:4000",
      service: "gmail",
      port: 465,
      auth: {
        user: "aayushthaps975@gmail.com",
        pass: "xxbkudibldtaftiq",
      },
    });
    let mailOptions = {
      from: email,
      to: "aayushthaps975@gmail.com",
      subject: "hi",
      text: sub,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("dfdfdf");
        reject(error);
      } else {
        resolve({ info });
      }
    });
  });
};
