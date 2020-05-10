declare module 'str-utils' {
    // export const ...
    // export function ...
    type strUtil<T> = (input: T) => T
    export const strReverse: strUtil<string>
    export const strToLower: strUtil<string>
    export const strToUpper: strUtil<string>
    export const strRandomize: strUtil<string>
    export const strInvertCase: strUtil<string>

}
