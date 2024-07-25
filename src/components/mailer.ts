import { type RequestEventBase } from "@builder.io/qwik-city";
import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "noreply.simavitezslav@gmail.com",
//     pass: "dcvz egwx bhaz kxqm", ev.env
//   },
// });

export function getNodemailer(ev: RequestEventBase) {
  return nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: ev.env.get("NODEMAILER_USER"),
      pass: ev.env.get("NODEMAILER_PASS"),
    },
  });
}
