import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div className="container text-start">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <Link to={`/products/${product.id}`}>More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
