import { memo } from "react";

const Memo = memo(({ data }) => {
  console.count("memo count");
  return (
    <div className="container text-center">
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </div>
  );
});
export default Memo;
