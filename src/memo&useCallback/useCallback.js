import { memo } from "react";

const Callback = memo(({ data, deleteItem }) => {
  console.count("memo count");
  return (
    <div className="container text-start">
      <ul>
        {data.map((d) => (
          <li className="my-2" key={d.id}>
            {d.title}
            <button
              className="btn btn-danger p-3 text-end"
              onClick={(e) => deleteItem(d.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
export default Callback;
