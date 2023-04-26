import { useParams, Link } from "react-router-dom";
function SingleProduct({ products }) {
  const { productId } = useParams();
  const single = products.find((product) => product.id === +productId);
  return (
    <div className="container text-center">
      <img
        src={single.image}
        alt=""
        className="img-thumbnail"
        width={300}
        height={300}
      />
      <h1>{single.title}</h1>
      <p>Price:$ {single.price}</p>
      <p>{single.description}</p>
      <Link to="/products">Back To Products</Link>
    </div>
  );
}
export default SingleProduct;
