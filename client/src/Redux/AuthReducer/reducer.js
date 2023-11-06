import { LOGINSIGNUP_FALIURE, LOGINSIGNUP_REQUEST, LOGINSIGNUP_SUCCESS } from "../actionTypes";

const initialState = {
    isLoading : false, 
    isError : false,
}

export const reducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case LOGINSIGNUP_REQUEST:
            return {...state, isLoading : true,isError : false}

        case LOGINSIGNUP_SUCCESS:
            return {...state, isLoading : false,}    

        case LOGINSIGNUP_FALIURE:
            return {...state, isLoading : false, isError : true} 

        default:
            return state;
    }
}
