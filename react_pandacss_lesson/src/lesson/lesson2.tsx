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
    </div>

 </>
  );
}
