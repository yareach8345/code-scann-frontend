export type Validator<T> = (value: T) => string | true

export function validatorFactory<T>(predicate: (value: T) => boolean, message: string): Validator<T> {
    return value => predicate(value) || message
}

export function notEmpty(message: string = "필수항목입니다."): Validator<any> {
    return validatorFactory(
        value => !!value,
        message
    )
}

export function notInclude(
    banWords:  string[],
    message: string = `포함될 수 없는 문자가 포함되어 있습니다: ${banWords.join(", ")}`
): Validator<string> {
    // return value => value.split('').filter(c => banWords.includes(c)).length == 0 || message
    return validatorFactory(
        value => !banWords.some(c => value.includes(c)),
        message
    )
}

export function notIncludeSpace(message: string = "공백을 포함할 수 없습니다.") {
    return notInclude([' '], message)
}

export function lengthMoreThan(minimalLength: number, message: string = `길이가 ${length}이상이어야 합니다.`): Validator<string> {
    return validatorFactory(
        value => value.length >= minimalLength,
        message
    )
}

export function lengthLessThan(maximumLength: number, message: string = `길이가 ${length}이하어야 합니다.`): Validator<string> {
    return validatorFactory(
        value => value.length <= maximumLength,
        message
    )
}

export function equalTo<T>(other: T, message: string): Validator<T> {
    console.log(other)
    return validatorFactory(
        value => value === other,
        message
    )
}

export function contextualValidator(value: boolean, message: string): Validator<any> {
    return validatorFactory(
        _ => value,
        message
    )
}

const idRulesInstance = [
    notEmpty("id를 입력 해주세요."),
    notIncludeSpace("id는 공백을 포함할 수 없습니다."),
    lengthMoreThan(1, "id는 1자 이상이어야 합니다."),
    lengthLessThan(255, "id는 255자 이하여야 합니다."),
]
export function idRules(): Validator<string>[] {
    return idRulesInstance
}

const passwordRulesInstance = [
    notEmpty("비밀번호를 입력 해주세요"),
    notIncludeSpace("비밀번호는 공백을 포함할 수 없습니다."),
    lengthMoreThan(8, "비밀번호는 8자 이상이어야 합니다."),
    lengthLessThan(255, "비밀번호는 255자 이하여야 합니다."),
]

export function passwordRules(): Validator<string>[] {
    return passwordRulesInstance
}