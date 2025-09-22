export default function ListingDetail({ listing }: { listing: any }) {
  return (
    <div>
      <img src={listing.image?.url} alt={listing.title} style={{ maxWidth: 600 }} />
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
    </div>
  )
}
