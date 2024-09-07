// import 'util'
// import 'process'
// import 'buffer'
// import 'stream-browserify';
// import nodemailer from 'nodemailer';


// export const sendEmail = async (to, fromName, message) => {
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your_email@gmail.com',
//             pass: 'your_email_password',
//         },
//     });

//     let mailOptions = {
//         from: 'your_email@gmail.com',
//         to,
//         subject: 'Contact Form Submission',
//         text: `Name: ${fromName}\n\nMessage:\n${message}`,
//     };

//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully:', info.response);
//         return true;
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return false;
//     }
// };
