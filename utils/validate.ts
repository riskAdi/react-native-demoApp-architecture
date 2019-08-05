
import * as jsonSchema from '../schema'
import {requestSchema,SCHEMA} from '../types'
import Ajv from 'ajv'

export async function validateRequest(options:requestSchema):Promise<[boolean,string[]]>{

    try {
        let validateSchema:any;
        switch (options.type){

            case SCHEMA.LOGIN:
                validateSchema = jsonSchema.loginSchema; 
            break;

            case SCHEMA.SIGNUP:
            break; 
        } 

        const ajv = new Ajv({ allErrors: true,verbose: true, schemas: [validateSchema] });
        const valid = await ajv.validate(validateSchema.$id, options.model)
        var errorMsgArray:[boolean,string[]];

        if (!valid) {
            console.log(ajv.errorsText(ajv.errors))

            const errorMsgs:string[] = [];
            ajv.errors.forEach(element => {
                errorMsgs.push(element.message);
            });      
            errorMsgArray = [true,errorMsgs];
        }else{
            errorMsgArray = [false,[]];
        }
        return errorMsgArray
    }
    catch (error) {
        throw error;
    }
}
