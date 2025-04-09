export default function EditProduct() {
  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      <form>
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" name="product-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="product-description">Product Description</label>
          <textarea id="product-description" name="product-description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="product-price">Product Price</label>
          <input type="number" id="product-price" name="product-price" required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}