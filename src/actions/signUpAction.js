import Request from 'axios';

// signUpReg action duspatcher
// export const signUpReg = (regData) => dispatch => {
//     dispatch(
//         signUp(regData)
//     )
// }

// signUp action dispatcher...
// export function signUp(regData)
// {
//     return {
//         type : SIGNUP,
//         payload: regData
//     }
// }

export function setUserNamePassword(psw)
{
    return {
        type : 'SET_USER_PASSWORD',
        payload: psw
    }
}

export function setReEnterPassword(rePsw)
{
    return {
        type : 'SET_REENTERED_PASSWORD',
        payload : rePsw
    }
}