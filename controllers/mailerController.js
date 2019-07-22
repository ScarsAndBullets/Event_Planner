let nodemailer = require('nodemailer');

module.exports = {

    sendMail: (req, res) => {
        console.log(`send mail controller`)

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NMUSER,
                pass: process.env.NMPASS
            }
        });

        console.log(typeof process.env.NMUSER, process.env.NMUSER, typeof process.env.NMPASS, process.env.NMPASS)

        let mailOptions = {
            from: process.env.NMUSER,
            to: req.body.email,
            subject: "You've been invited to an event in pland",
            text: `Follow this link to view the event: localhost:3000/api/`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

    }
};