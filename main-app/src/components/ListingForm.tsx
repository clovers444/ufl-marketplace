export default function ListingForm() {
  return (
    <form>
      <label>Title<input name="title" /></label>
      <label>Price<input name="price" type="number" /></label>
      <button type="submit">Create</button>
    </form>
  )
}
