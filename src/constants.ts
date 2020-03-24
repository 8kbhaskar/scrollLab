const response_messages = {
    AREADATASAVED: "Area data saved Successfully.",
    GETAREADATA: "Get Data.",
    INVALID_AREA_ID: "Invalid Area id.",
    AREADATAUPDATED: "Area Updated Successfully.",
    DATALIST: "Data list is.",
    ZONEDATASAVED: "Zone Data Saved Successfully",
    INVALID_ZONE_ID: "Invalid Zone id.",
    ZONENAMEEXITS: "Zone ID already exists.",
    ZONEUPDATED: "Zone Updated Successfully",
    CONTACT_SAVED: "Contact Saved Successfully.",
    EMAIL_ALREADY: "Email Already Exists",
    MOBILE_ALREADY: "Mobile Already Exists.",
    CONTACT_DATA: "Contact Data is",
    INVALID_ID: "Invalid {subject} id.",
    INVALID_DATA_TYPE: "Invalid Data Type.",
    DUBLICATE_KEY: "{subject} Already Exists ",
    UPDATED: "{subject} updated Successfully.",
    WARDDATASAVED: "Ward Saved Successfully.",
    GETWARDDATA: "Ward Data is",
    INVALID_WARD_ID: "Invalid Ward Id.",
    NAMEEXISTS: "{subject} already exists.",
    SAVED: "{subject} Saved successfully.",
    SUBJECT_NOT_FOUND: "{subject} Not Found",
    REMOVE_MAPPING: "Mappings Removed",
    CERTIFICATION_SAVED:"Saved Successfully."
    

}
const REJECTION = {
    BAD_REQUEST:"Bad Request params missing",
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

const current_date = () => new Date()

const key_prefix = {
    SUPPLIER: `SUPPLIER-`,
    USER: `USER-`,
    PRODUCT: `PRODUCT-`,
    LOCATION: `LOCATION-`,
    PRODUCT_LOCATION: `PRODUCTLOCATION-`,
    CATEGORY: `CATEGORY-`,
    SUB_CATEGORY: `SUBCATEGORY-`
}

const generate_uuid = () => {
    return 'xxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const FEE_TYPE = {
    FREE: 1,
    CHARGEABLE: 2
}


const STATUS = {
    ACTIVE: 1,
    INCATIVE: 2,
    DELETED: 3
}

const TOILET_IMAGE_TYPE = {
    IMAGE_OUTSIDE: 1,
    IMAGE_FRONT: 2
}

const IMAGE_CATEGORY = {
    TOILET_DATA: 1,
    TOILET_DETAILS: 2
}

const FUNCTIONAL_STATUS = {
    FUNCTIONAL: 1,
    NOT_IN_USE: 2
}


const URL = {
    STATE: "http://165.22.216.228:8082/state/drop/",
    DISTRICT: "http://165.22.216.228:8082/district/drop/{statecode}",
    WARD: "http://165.22.216.228:8082/ward/drop/{ulbId}",
    CATEGORY: "http://165.22.216.228:8082/form/type/{type}",
    ULB: "http://165.22.216.228:8082/ulb/drop/{districtId}",
    DESIGNATION:"http://165.22.216.228:8082/designation/drop/down",
    ACCESS:"http://165.22.216.228:8082/access/level/drop/down"

}

const GET_MASTER_URL = {
    STATE: "http://165.22.216.228:8082/state/{code}",
    DISTRICT: "http://165.22.216.228:8082/district/{code}",
    ULB: "http://165.22.216.228:8082/ulb/{code}",
    WARD: "http://165.22.216.228:8082/ward/drop/{ulbId}",
    CATEGORY: "http://165.22.216.228:8082/form/type/{type}",
    DESIGNATION:"http://165.22.216.228:8082/designation/drop/down",
    ACCESS:"http://165.22.216.228:8082/access/level/drop/down"

}


const GENDER_CONST = {
    GENTS: 1,
    LADIES: 2,
    OTHER: 3,

}
export {
    response_messages,
    status_codes,
    response_data,
    current_date,
    key_prefix,
    generate_uuid,
    FEE_TYPE,
    STATUS,
    TOILET_IMAGE_TYPE,
    IMAGE_CATEGORY,
    FUNCTIONAL_STATUS,
    URL,
    GET_MASTER_URL,
    GENDER_CONST,
    REJECTION

}
