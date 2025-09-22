// Helpers to convert MongoDB documents to DTOs for API responses

export function serializeListing(doc: any) {
  if (!doc) return null
  return {
    id: doc._id?.toString(),
    title: doc.title,
    description: doc.description,
    price: doc.price ?? null,
    isFree: !!doc.isFree,
    image: doc.image ?? null,
    condition: doc.condition,
    createdAt: doc.createdAt?.toISOString(),
    status: doc.status,
  }
}
