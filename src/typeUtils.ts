// If type is an object, displays all it's properties. Useful when dealing with a union type
type Prettier<T> = T extends object ? { [K in keyof T]: T[K] } : T;
export type { Prettier };
