import PropTypes from 'prop-types'
import { LoginForm } from './loginForm';
enum SCHEMA {
    LOGIN = 1,
    SIGNUP
}

interface requestSchema {
    model:{username:string,password:string};
    type:SCHEMA;
}

const NodeType =   PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.func,
  ]);
  


export {requestSchema,SCHEMA,LoginForm,NodeType}