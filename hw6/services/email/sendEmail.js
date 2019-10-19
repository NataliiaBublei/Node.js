const mailer = require('nodemailer');

const {MAIL_CREDENTIAL} = require('../../constant');

module.exports = async email => {
    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: MAIL_CREDENTIAL.EMAIL,
            pass: MAIL_CREDENTIAL.PASSWORD
        }
    });

    await transport.sendMail({
        to: email,
        from: 'email',
        html: 'Congratulations! You\'ve successfully registered.',
        subject: 'TEST MESSAGE'
    });
};