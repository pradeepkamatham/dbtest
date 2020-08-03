const nodeMailer = require("nodemailer");
const globalDefs = require("../globalDefs.js");

/**
 * emailService class provides the definition to send an email
 * from the program using nodeMailer library.
 */
module.exports = class emailService {

    /**
     * Initializes the default constructor.
     */
    constructor() {

        // create the transporter with the required configuration for outlook.
        this.transporter = nodeMailer.createTransport({
            host: TRANSPORTER_MAIL.host,
            secureConnection: TRANSPORTER_MAIL.secureConnection,
            port: TRANSPORTER_MAIL.port,
            auth: TRANSPORTER_MAIL.auth,
            tls: TRANSPORTER_MAIL.tls
        });

        // sets up e-mail data.
        this.mailOptions = {
            from: MAIL_OPTIONS.from,
            to: MAIL_OPTIONS.to,
            subject: MAIL_OPTIONS.subject,
            text: "",
            html: ""
        };
    }

    /**
     * Sends email with passed email body.
     * @param {string} text represents the email body to be sent.
     */
    sendEmail(text, cb) {
        if (TRANSPORTER_MAIL.disabled) {
            this.log.info(`email disabled: ${text}`);
            return;
        }

        // assigns the text passed to email body.
        this.mailOptions.text = text;

        // calls the sendMail function in transporter.
        this.transporter.sendMail(this.mailOptions, (error, res) => {

            if (error) {

                // logs the error to console.
                this.log.error(`failed to send email, nodeMailer error: ${error}`);

                cb(`failed to send email, nodeMailer error: ${error}`);

            } else {

                // logs the result response after sending the email successfully.
                this.log.info(`email sent: ${res.response}`);

                cb(null, `email sent: ${res.response}`);
            }
        });
    }
}