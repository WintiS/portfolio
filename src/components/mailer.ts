import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "noreply.simavitezslav@gmail.com",
    pass: "dcvz egwx bhaz kxqm",
  },
});
