

const InitialState = {
    password: "",
    //name:""
}

export default function signUp(state=InitialState, action)
{
    switch(action.type)
    {
        case "SignUp":
        return { ...state, signUp : action.payload}
        break;

        case "SET_USER_PASSWORD":
        return {...state, password : action.payload}
        break;




        default: return state;
    }
    return state;
}