import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container text-center">
      <h1>404</h1>
      <p>Your Request is not defined.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Error;
