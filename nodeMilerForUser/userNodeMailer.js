const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'sribalajimanpower90@gmail.com',
    pass: 'maqt eton vrmo xsmm'
  }
});

// Function to send email
const sendRegistrationEmail = async (to, subject, html) => {
  const mailOptions = {
    from: 'sribalajimanpower90@gmail.com',
    to,
    subject, 
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Registration email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendRegistrationEmail;
