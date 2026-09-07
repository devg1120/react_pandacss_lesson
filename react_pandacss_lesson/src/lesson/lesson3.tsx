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
