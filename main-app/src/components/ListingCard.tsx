export default function ListingCard({ listing }: { listing: any }) {
  return (
    <article>
      <img src={listing.image?.url} alt={listing.title} style={{ width: 240 }} />
      <h3>{listing.title}</h3>
      <p>{listing.price ? `$${listing.price}` : 'Free'}</p>
    </article>
  )
}
