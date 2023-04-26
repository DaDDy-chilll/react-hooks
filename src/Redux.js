import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, rest } from "./features/couter/counterSlice";
function Redux() {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div className="container text-center">
      <div className="w-75">
        <h1 className="h1">{count}</h1>
        <button
          className="btn btn-success p-3"
          onClick={() => dispatch(increase())}
        >
          Increase +
        </button>
        <button
          className="btn btn-warning p-3 me-2 ms-2"
          onClick={() => dispatch(decrease())}
        >
          Decrease -
        </button>
        <button className="btn btn-danger p-3" onClick={() => dispatch(rest())}>
          Rest
        </button>
      </div>
    </div>
  );
}

export default Redux;
