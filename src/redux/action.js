export const actions={
    DELETE_REQUEST:"DELETE_REQUEST",
    DELETE_SUCCESS:"DELETE_",
    DELETE_REQUEST:"DELETE_REQUEST",

}


export const delActionRequest=(()=>{
    return {
        type:actions.DELETE_REQUEST
    }
})

export const delActionFailure=(()=>{
    return {
        type:actions.DELETE_FAILURE
    }
})

export const delActionSuccess=(()=>{
    return {
        type:actions.DELETE_SUCCESS
    }
})