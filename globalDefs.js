// Software versions.
// Version '0.0.1': Initial develop version.

// directory where all the log files are stored.
global.LOGS_FOLDER = ".\\LOGS\\";

// object that holds the email configuration options.
global.TRANSPORTER_MAIL = {
    host: "",
    secureConnection: false,
    port: 587,
    auth: {
        user: "",
        pass: ""
    },
    tls: {
        ciphers: "SSLv3"
    },
    disabled: false
}

// object that holds the mail options constants.
global.MAIL_OPTIONS = {
    from: "", //make sure that the username and from has same email address.
    to: "",
    subject: ""
}