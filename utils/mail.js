const nodemailer = require('nodemailer');
const sendgrid = require('@sendgrid/mail');

function createGmailTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });

  return transporter;
}

async function sendNodemailer(data) {
  const transporter = createGmailTransporter();
  const info = await transporter.sendMail(data);

  return info;
}

async function sendMailSendGrid(data) {
  console.log('data sendgrid => ', data);
  const apiKeyConnection = sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('apiKeyConnection => ', apiKeyConnection);
  console.log('before sendgrid send ');
  const sentMessage = await sendgrid.send(data);
  console.log('after sendgrid send');
  console.log('sentMessage => ', sentMessage);
  return sentMessage;
}

module.exports = {
  sendNodemailer,
  sendMailSendGrid,
};
