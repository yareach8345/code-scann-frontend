export interface LoginSuccessDto{
    success: true
    id: string
}

export interface LoginFailureDto{
    success: false
    message: string
}

export type LoginResultDto = LoginSuccessDto | LoginFailureDto