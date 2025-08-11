export type BrandType<T, BrandName> = T & { readonly __brand: BrandName }
