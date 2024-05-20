// src/entry.server.tsx
import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

import express from "express";

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "baksus466@gmail.com",
    pass: "webgames",
  },
});

// FormAction handler
app.post("/api/send-email", async (req: any, res: any) => {
  const { fullname, mail, phone, goal, budget } = req.body;

  const mailOptions = {
    from: "baksus466@gmail.com",
    to: "kviteksima@seznam.cz",
    subject: `Nové vyplnění formuláře od>>> ${fullname}`,
    text: `Jméno: ${fullname}, email: ${mail}, telefon: ${phone}, cíl: ${goal}, rozpočet: ${budget}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
});

app.use(router);
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
