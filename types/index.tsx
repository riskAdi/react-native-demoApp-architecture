
enum SCHEMA {
    LOGIN = 1,
    SIGNUP
}

interface requestSchema {
    model:{username:string,password:string};
    type:SCHEMA;
}

export {requestSchema,SCHEMA}