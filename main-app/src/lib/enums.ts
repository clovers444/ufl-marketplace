export const categories = ['clothing','furniture','transportation','appliances','other'] as const
export type Category = typeof categories[number]

export const conditions = ['like-new','good','fair','poor'] as const
export type Condition = typeof conditions[number]
