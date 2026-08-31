import { useState } from "react";
import { css } from "../../styled-system/css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>クリック数: {count}</p>
        <button onClick={() => setCount(count + 1)}>増やす OK2 3</button>
      </div>
      <div
        className={css({
          backgroundColor: "red",
          borderRadius: "9999px",
          fontSize: "13px",
          padding: "10px 15px",
        })}
      >
        Panda!
      </div>
    </>
  );
}
