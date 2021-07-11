interface ObjectConstructor {
  entries<T>(obj: T): Entries<T>;
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
