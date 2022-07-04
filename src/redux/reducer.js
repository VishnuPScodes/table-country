import { actions } from "./action"





const initState={
    loading:false,
    error:false

}

export const delReducer=((state=initState,action)=>{
    switch (action.type){
        case actions.DELETE_REQUEST :{
            return {
                ...state,
                loading:true
            }
        }
        case actions.DELETE_SUCCESS:{
            return {
                ...state,
                loading:false
            }
        }
    }
})