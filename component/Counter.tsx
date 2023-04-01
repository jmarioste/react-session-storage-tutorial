import { useSessionStorage } from "usehooks-ts";

const Counter = () => {
  const [count, setCount] = useSessionStorage("count", 0);
  return (
    <div>
      Counter
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};
export default Counter;
