import { stat } from "fs";


const InitialState = {
    password: "",
    confirmPassword : "",
    username : "", 
    email : "", 
    timeZone : "",
    signupId: "",
    members: []
    // sigupFormDetails : {username : "", email : "", password : "", confirmPassword : "", timeZone : ""}
    //name:""
}

export default function signUp(state=InitialState, action)
{
    switch(action.type)
    {
        case "FULL_FORM_DETAILS":
        return { ...state, sigupFormDetails : action.payload}
        break;

        case "SET_FORM_DATA":
            let cState = {...state};
            cState[action.payload.name] = action.payload.value;
        return cState;
        break;

        case "SET_USER_PASSWORD":
        return {...state, password : action.payload}
        break;

        case "SET_REENTERED_PASSWORD":
        return {...state, confirmPassword : action.payload }
        break;

        case "SET_ALL_MEMBERS":
        console.log("reducer members", action.payload)
        return {...state, members : action.payload}
        break;

        default: return state;
    }

    return state;
}