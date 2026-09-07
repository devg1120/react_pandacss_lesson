

const doc = `
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
`;


export { doc };



const lesson1 = `
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
`;


export { lesson1 };



const lesson2 = `
import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import { flex } from "../../styled-system/patterns";
import { circle } from "../../styled-system/patterns";

  const hStyle = css.raw({
    "font-size": "1.0rem",
    "font-weight": "500",
    "letter-spacing": "1.5px",
    "line-height": "2.2",
    "color": "#000000",
    "border-left": "8px solid gray", 
    "border-bottom": "1px solid gray",
    "padding-left": "8px",
    "margin-top": "10px",
    "margin-bottom": "10px",
  });


export default function Counter() {
 return (
 <>

    <h3 className={css(hStyle)}>container</h3>
    <div className={container()}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>

    <h3 className={css(hStyle)}>flex</h3>
   <div
      className={flex({
        align: "center",
        direction: "column-reverse",
        justify: "center",
      })}
    >
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
    <h3 className={css(hStyle)}>circle</h3>
        <div className={circle({ size: "20", bg: "lightgreen", overflow: "hidden" })}>
      <img src="" alt="" />
    </div>

 </>
  );
}
`;


export { lesson2 };



const lesson3 = `
import { css } from "../../styled-system/css";
import { cva } from '../../styled-system/css';

const hStyle = css.raw({
    "font-size": "1.0rem",
    "font-weight": "500",
    "letter-spacing": "1.5px",
    "line-height": "2.2",
    "color": "#000000",
    "border-left": "8px solid gray", 
    "border-bottom": "1px solid gray",
    "padding-left": "8px",
    "margin-top": "10px",
    "margin-bottom": "10px",
});

const button = cva({
  base: {
    display: "flex",
  },
  variants: {
    color: {
      cream: { bg: "#FFE4DB", color: "#DF4D20" },
      orange: { bg: "#DF4D20", color: "#ffffff" },
    },
    size: {
      lg: { fontSize: "24px", padding: "8" },
      sm: { fontSize: "12px", padding: "4" },
    },
  },
});

export default function Content() {
 return (
 <>

    <h3 className={css(hStyle)}>button</h3>
    <button className={button({ color: "orange", size: "sm" })}>送信</button>
    <button className={button({ color: "cream", size: "lg" })}>送信</button>

 </>
  );
}
`;


export { lesson3 };



const lesson4 = `
//import { css } from "../../styled-system/css";
//import { cva } from '../../styled-system/css';
import { styled } from "../../styled-system/jsx";

const hStyle = css.raw({
    "font-size": "1.0rem",
    "font-weight": "500",
    "letter-spacing": "1.5px",
    "line-height": "2.2",
    "color": "#000000",
    "border-left": "8px solid gray", 
    "border-bottom": "1px solid gray",
    "padding-left": "8px",
    "margin-top": "10px",
    "margin-bottom": "10px",
});


export default function Content() {

 return (
    <styled.div
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column-reverse"
    >
      <div>First</div>
      <div>second</div>
      <div>Third</div>
    </styled.div>
  );

}
`;


export { lesson4 };

