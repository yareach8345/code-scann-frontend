interface Field<T> {
    value: T | null
}

export interface UserInfoUpdateDto {
    password?: Field<string>
    nickname?: Field<string>
    icon?: Field<string>
}