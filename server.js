// const express = require("express");
// const router = express.Router();

// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const PORT = process.env.PORT || 3001;
// const dotenv = require("dotenv");
// const path = require("path");

// dotenv.config();

// const app = express();

// if (process.env.NODE_ENV === "production") {
//   const root = require("path").join(__dirname, "build");
//   app.use(express.static(root));
//   app.get("*", (req, res) => {
//     res.sendFile("index.html", { root });
//   });
// }

// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "../../client/dist")));
// // }
// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
// // });

// app.use(cors());
// app.use(express.json());

// app.use("/", router);
// app.listen(PORT, () => console.log("Server Running"));
// console.log(PORT);
// var smtpTransport = require("nodemailer-smtp-transport");

// var contactEmail = nodemailer.createTransport(
//   smtpTransport({
//     host: "tddstuke@gmail.com",
//     port: 80,
//     service: "gmail",
//     auth: {
//       user: "tddstuke@gmail.com",
//       pass: process.env.PASSWORD,
//     },
//   })
// );

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "tddstuke@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });
