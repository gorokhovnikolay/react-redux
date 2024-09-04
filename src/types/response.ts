interface SuccessResponse<T>{
    success:boolean
    data:T
}

interface ErrorResponse{
    sucess:boolean
    error:string
}

export type Responses<T=never> = ErrorResponse | SuccessResponse<T> 

export const isSuccessResponse = <T>(res:SuccessResponse<T>):res is SuccessResponse<T> =>{
    return res.success
}