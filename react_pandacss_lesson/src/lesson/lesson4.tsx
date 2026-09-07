import { css } from "../../styled-system/css";
//import { cva } from '../../styled-system/css';
import { styled } from "../../styled-system/jsx";

import { hStyle } from "./static_css";


export default function Content() {

 return (
 <>
    <h3 className={css(hStyle)} >style-props</h3>

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
 </>
  );

}
