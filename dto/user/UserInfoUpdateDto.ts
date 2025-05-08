interface Field<T> {
    value: T | null
}

export interface UserInfoUpdateDto {
    password?: Field<string>
    nickName?: Field<string>
    icon?: Field<string>
}