const Contact = require("./../models/contactFormSchema");
const sendRegistrationEmail = require("./../nodeMilerForUser/userNodeMailer");

exports.userForm = async (req, res) => {
  try {
    const { fullname, email, phone, service, message='Can You Contact Me' } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      fullname,
      email,
      phone,
      service,
      message,
    });

    // Save the document to MongoDB
    await newContact.save();

    const subject = "Registration Successful";
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Registration Successful</title>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden; font-family: Arial, sans-serif;">
          <div style="background-color: #4CAF50; color: white; padding: 16px; font-size: 24px; text-align: center;">
            Registration Successful
          </div>
          <div style="padding: 16px;">
            <p>Hello,</p>
            <p>I Want to Talk About Your Services Please Contact Me</p>
            <p><strong>Full Name:</strong> ${fullname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <div style="background-color: #f1f1f1; padding: 16px; text-align: center;">
            Best Regards,<br>
            Sri Balaji Man Power Company
          </div>
        </div>
      </body>
      </html>
      `;

    await sendRegistrationEmail(email, subject, html);

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.error("Error submitting form:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
