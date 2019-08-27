import {validate, ValidationError} from "class-validator";

export async function validateForm(form:any):Promise<[boolean,[any]?]>{

    try {
        
        let errorsObj:[any] = Array();
	    const response: ValidationError[] = await validate(form) 
        
        if (response.length > 0) {

		    for(const error of response){

	    		const key:string[] = Object.keys(error.constraints)
				const errorMessage:string = error.constraints[key[0]]
                const errorObj = {key:error.property,msg:errorMessage};
				errorsObj.push(errorObj);
			} 
		}

        if(errorsObj.length>0){
            return [true,errorsObj];
        }else{
            return [false];
        } 
    }
    catch (error) {
        throw error;
    }

}