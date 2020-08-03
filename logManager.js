"use strict";
const fs = require("fs");
const globalDefs = require("../globalDefs.js");

/**
 * logManager class provides the definition for logging all sorts of information to a local log file.
 */
module.exports = class logManager {
    constructor(name) {

        // represents the task name that called the logManager.
        this.name = name;

        // defines the path to root folder for log files.
        this.rootFolder = LOGS_FOLDER;

        // checks if the directory exists, else creates one.
        fs.stat(this.rootFolder, (err, stats) => {
            if (err && err.code === "ENOENT") {
                // if the error code is '34 - not exists', create one.
                fs.mkdir(this.rootFolder);
            }
        });
    }

    /**
     * logs the normal info messages.
     * @param {string} message  represents the message passed.
     */
    info(message) {
        this.writeToFile("info", message, null);
    }

    /**
     * logs the warning message passed by the program.
     * @param {string} message     represents the message passed.
     * @param {object} exception   represents the exception to be logged.
     */
    warn(message, exception) {
        this.writeToFile("warn", message, exception);
    }

    /**
     * logs the debugging information passed by the program.
     * @param {string} message      represents the message passed.
     * @param {Object} exception    represents the exception to be logged.
     */
    debug(message, exception) {
        this.writeToFile("debug", message, exception);
    }

    /**
     * logs the errors passed by the program.
     * @param {string} message      represents the message passed.
     * @param {object} exception    represents the exception to be logged.
     */
    error(message, exception) {
        this.writeToFile("error", message, exception);
    }

    /**
     * logs the fatal error messages passed by the program.
     * @param {string} message      represents the message passed.
     * @param {object} exception    represents the exception to be logged.
     */
    fatalError(message, exception) {
        this.writeToFile("fatalError", message, exception);
    }

    /**
     * method to log the information to local files in the root folder.
     * @param {string} level    represents the level of log.
     * @param {string} message  represents the message passed to be logged.
     * @param {string} exception    represents the exception.
     */
    writeToFile(level, message, exception) {
        try {

            // gets the data and time.
            const dateTime = new Date();

            // gets the file name.
            const file = this.rootFolder + dateTime.toDateString() + ".log";

            // constructs the data in CSV format that need to be written.
            const data = `${dateTime.toLocaleString()}[${this.name}],${level},${message},${exception}\r\n`;

            // appends the data to the file specified.
            // if no file exists in the location, it creates one.
            fs.appendFileSync(file, data);

        } catch (err) {
            // logs the error to console.
            console.log(`[${this.name}] error while writing log information to log file, please try again.`);
        }
    }
}