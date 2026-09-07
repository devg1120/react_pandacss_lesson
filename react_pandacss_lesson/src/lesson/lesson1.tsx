import { useState } from "react";
import { css } from "../../styled-system/css";

export default function Counter() {

  return (
    <>
      <p>css</p>
      <div
        className={css({
          backgroundColor: "lightgreen",
          borderRadius: "9999px",
          fontSize: "13px",
          padding: "10px 15px",
        })}
      >
        Panda!
      </div>
      <br/>
      <p>入れ子css</p>
      <ul className={css({ bg: "lightgray", "&  li": { bg: "blue", color: "white", margin: "4px" , width: "60px"} })}>
        <li>P</li>
        <li>a</li>
        <li>n</li>
        <li>D</li>
        <li>a</li>
        <li>!</li>
      </ul>

      <br/>
      <p>疑似要素</p>
      <div
        className={css({
          bg: "red",
          _hover: { bg: "yellow" },
          _focus: { bg: "green" },
        })}
      >
        Panda!
      </div>
    </>
  );
}
