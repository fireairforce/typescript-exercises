declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number
    type IndexFunction = <T>(input: Array<T>, comparator: Comparator<T>) => number
    type ElementFunction = <T>(input: Array<T>, comparator: Comparator<T>) => T

    export const getMaxIndex: IndexFunction;
    export const getMaxElement: ElementFunction;
    export const getMinIndex: IndexFunction;
    export const getMinElement: ElementFunction;
    export const getMedianIndex: IndexFunction;
    export const getMedianElement: ElementFunction;
    export const getAverageValue: <T, U>(input: Array<T>, getValue: (item: T) => U) => U
}
