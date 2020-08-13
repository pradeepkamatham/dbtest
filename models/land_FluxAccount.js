const Model = require("sequelize");

export default class land_FluxAccount extends Model {
    static init(sequelize) {
        return super.init({
            logApiId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "LOG_API_ID"
            },
            userId: {
                type: DataTypes.INTEGER,
                field: "USER_ID"
            },
            accountId: {
                type: DataTypes.INTEGER,
                field: "ACCOUNT_ID"
            },
            accountConfirmedAt: {
                type: DataTypes.DATE,
                field: "ACCOUNT_CONFIRMED_AT"
            },
            accountNumber: {
                type: DataTypes.string(16),
                field: "ACCOUNT_NUMBER"
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "CREATED_AT"
            },
            authorisedPerson: {
                type: DataTypes.STRING,
                field: "AUTHORISED_PERSON"
            },
            autoPaymentAmount: {
                type: DataTypes.DECIMAL(10, 2),
                field: "AUTO_PAYMENT_AMOUNT"
            },
            autoPaymentAmountType: {
                type: DataTypes.STRING(32),
                field: "AUTO_PAYMENT_AMOUNT_TYPE"
            },
            autoPaymentFrequency: {
                type: DataTypes.STRING(32),
                field: "AUTO_PAYMENT_FREQUENCY"
            },
            autoPaymentStartDate: {
                type: DataTypes.DATE,
                field: "AUTO_PAYMENT_START_DATE"
            },
            autoPaymentDaysNotice: {
                type: DataTypes.INTEGER,
                field: "AUTO_PAYMENT_DAYS_NOTICE"
            },
            companyName: {
                type: DataTypes.STRING,
                field: "COMPANY_NAME"
            },
            secondAccountHolderFirstName: {
                type: DataTypes.STRING,
                field: "SECOND_ACCOUNT_HOLDER_FIRST_NAME"
            },
            secondAccountHolderLastName: {
                type: DataTypes.STRING,
                field: "SECOND_ACCOUNT_HOLDER_LAST_NAME"
            },
            secondAccountHolderMiddleName: {
                type: DataTypes.STRING,
                field: "SECOND_ACCOUNT_HOLDER_MIDDLE_NAME"
            },
            accountType: {
                type: DataTypes.STRING(32),
                field: "ACCOUNT_TYPE"
            },
            mergedIntoCustomerId: {
                type: DataTypes.INTEGER,
                field: "MERGED_INTO_CUSTOMER_ID"
            },
            defaultPaymentSourceType: {
                type: DataTypes.STRING(32),
                field: "DEFAULT_PAYMENT_SOURCE_TYPE"
            },
            sendBalanceWeekDay: {
                type: DataTypes.INTEGER,
                field: "SEND_BALANCE_WEEKDAY"
            },
            balanceEmailFrequency: {
                type: DataTypes.STRING,
                field: "BALANCE_EMAIL_FREQUENCY"
            },
            experience: {
                type: DataTypes.STRING(32),
                field: "EXPERIENCE"
            },
            preferredBillingDay: {
                type: DataTypes.INTEGER,
                field: "PREFERRED_BILLING_DAY"
            },
            friendPromotionEnabled: {
                type: DataTypes.BOOLEAN,
                field: "FRIEND_PROMOTION_ENABLED"
            },
            brandId: {
                type: DataTypes.INTEGER,
                field: "BRAND_ID"
            },
            secondAccountHolderPhone: {
                type: DataTypes.STRING(20),
                field: "SECOND_ACCOUNT_HOLDER_PHONE"
            },
            secondAccountHolderDateOfBirth: {
                type: DataTypes.DATE,
                field: "SECOND_ACCOUNT_HOLDER_DATE_OF_BIRTH"
            },
            onlyBillOnPreferredDay: {
                type: DataTypes.BOOLEAN,
                field: "ONLY_BILL_ON_PREFERRED_DAY"
            },
            corporateAccount: {
                type: DataTypes.BOOLEAN,
                field: "CORPORATE_ACCOUNT"
            },
            adminAccountManagerId: {
                type: DataTypes.INTEGER,
                field: "ADMIN_ACCOUNT_MANAGER_ID"
            },
            holdMailUntil: {
                type: DataTypes.DATE,
                field: "HOLD_MAIL_UNTIL"
            },
            meterReadIsScheduledEmail: {
                type: DataTypes.BOOLEAN,
                field: "METER_READ_IS_SCHEDULED_EMAIL"
            },
            meterReadAlertDays: {
                type: DataTypes.INTEGER,
                field: "METER_READ_ALERT_DAYS"
            },
            meterReadIsScheduledPush: {
                type: DataTypes.BOOLEAN,
                field: "METER_READ_IS_SCHEDULED_PUSH"
            },
            autoPaymentPendingPush: {
                type: DataTypes.BOOLEAN,
                field: "AUTO_PAYMENT_PENDING_PUSH"
            },
            estimateFinalBillReminderPush: {
                type: DataTypes.BOOLEAN,
                field: "ESTIMATE_FINAL_BILL_REMINDER_PUSH"
            },
            taxRegistrationExists: {
                type: DataTypes.CHAR(1),
                field: "TAX_REGISTRATION_EXISTS"
            },
            admInsertBatchId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "ADM_INSERT_BATCH_ID"
            },
            admInsertDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: "ADM_INSERT_DATE"
            }
        },
            {
                sequelize,
                modelName: "[LAND].[FLUX_ACCOUNT]",
                freezeTableName: true,
                timestamps: false,
                hooks: {
                    beforeValidate: function () {
                        // useful to log some info before logging.
                        console.log("execute before validation.");
                    },
                    afterValidate: function () {
                        // useful to log the error and notify about model validations.
                        console.log("execute after validation.");
                    }
                },
                validate: function () {
                    // model wide validations happen here.
                    // "this" gets all the model values.
                }
            });
    }
}