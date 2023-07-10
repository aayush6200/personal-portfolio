import nodemailer from "nodemailer";

export const Sent = (email, name) => {
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
      from: "aayushthaps975@gmail.com",
      to: email,
      subject: "Reply to query",
      text: `Hi ${name} . Thanks for contacting. Will reply within a day. Have a nice day`,
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
