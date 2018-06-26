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

export function setUserName(psw)
{
    return {
        type : 'SET_USER_NAME',
        payload: psw
    }
}