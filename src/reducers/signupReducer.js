

const InitialState = {
    username: "",
    //name:""
}

export default function signUp(state=InitialState, action)
{
    switch(action.type)
    {
        case "SignUp":
        return { ...state, signUp : action.payload}
        break;

        case "SET_USER_NAME":
        return {...state, username : action.payload}
        break;




        default: return state;
    }
    return state;
}