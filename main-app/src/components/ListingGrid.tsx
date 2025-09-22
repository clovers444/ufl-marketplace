export default function ListingGrid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'grid', gap: 16 }}>{children}</div>
}
