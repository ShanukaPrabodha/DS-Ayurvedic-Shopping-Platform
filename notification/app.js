const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 5006;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root API endpoint
app.get("/api/notification", (req, res) => {
  res.send("Notification API");
});

// Endpoint for sending an email
app.post("/api/notification/send-email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    // Create a Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Create an email message
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      text: text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

app.listen(port, () => {
  console.log(`Notification Server is running on port ${port}`);
});
