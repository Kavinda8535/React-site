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

// password action dispatcher...
export function setUserNamePassword(psw)
{
    return {
        type : 'SET_USER_PASSWORD',
        payload: psw
    }
}

export function setFormData(name, value)
{
    return {
        type : 'SET_FORM_DATA',
        payload: { name, value }
    }
}

// confirm password action dispatcher...
export function setReEnterPassword(rePsw)
{
    return {
        type : 'SET_REENTERED_PASSWORD',
        payload : rePsw
    }
}

export function signUp_AD(formDetails)
{
    return {
        type : 'FULL_FORM_DETAILS',
        payload : formDetails
    }
}

export function setMembersDataToList(mDataList)
{
    console.log("memberDataList ", mDataList)
    return {
        type : 'SET_ALL_MEMBERS',
        payload : mDataList
    }
}