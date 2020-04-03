const response_messages = {
    EMAIL_ALREADY: "Email Already Exists",
    MOBILE_ALREADY: "Mobile Already Exists.",
    INVALID_ID: "Invalid {subject} id.",
    DUBLICATE_KEY: "{subject} Already Exists ",
    UPDATED: "{subject} updated Successfully.",
    WARDDATASAVED: "Ward Saved Successfully.",
    GETWARDDATA: "Ward Data is",
    INVALID_WARD_ID: "Invalid Ward Id.",
    NAMEEXISTS: "{subject} already exists.",
    SAVED: "{subject} Saved successfully.",
    SUBJECT_NOT_FOUND: "{subject} Not Found",
    REMOVE_MAPPING: "Mappings Removed",
    CERTIFICATION_SAVED: "Saved Successfully."


}
const REJECTION = {
    BAD_REQUEST: "Bad Request params missing",
    FORM_NOT_FOUND: "Form Not Found",
    CODE_NOT_EXIST: "Code Does Not Exist",
    OFFICIAL_EXIST: 'Username or Census code is Taken',
    CODE_EXIST: 'Already Added With This Code',
    PAN_EXIST: 'Agency Already Added With This Pan'
}

const status_codes = {
    SUCCESS: 200,
    ALREADY_EXISTS: 409,
    BAD_REQUEST: 400,
    NO_DATA_FOUND: 204,
    ERROR: 500
}

const response_data = {
    EMPTY_OBJECT: {},
    EMPTY_ARRAY: []
}


const USER_STATUS = ['BRAND', 'INFLUNCER', 'ADMIN']

const ROLE = ['BRAND', 'INFLUNCER', 'ADMIN']

const GENDER_CONST = ['MALE', 'FEMALE', 'TRANSGENDER']

export {
    response_messages,
    status_codes,
    response_data,
    GENDER_CONST,
    REJECTION,
    ROLE,
    USER_STATUS

}
