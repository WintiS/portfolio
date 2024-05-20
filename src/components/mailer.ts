import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "baksus466@gmail.com",
    pass: "imaj cdgb kboi oozw",
  },
});
