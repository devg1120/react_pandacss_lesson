import CodeView from "./CodeView";

function Section({ children, width="600px", height="300px", bg="whitw", code, flex = false }) {
  if (flex) {
    return (
      <>
        <section id="center1" style={{ 
	          display: "flex", 
		  height: height }}>
          <div
            style={{
              border: "solid 1px white",
              margin: "0px",
              padding: "0px 20px 0px 0px",
              width: width,
              backgroundColor: bg,
            }}
          >
            {children}
          </div>
          <CodeView code={code} />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id="center1" style={{ 
	       }} >
          <div
            style={{
              border: "solid 1px gray",
              margin: "0px",
              padding: "20px",
              width: width,
              backgroundColor: bg,
            }}
          >
            {children}
          </div>
          <div style={{ height: "300px" }}>
            <CodeView code={code} style={{ overflow: "hidden" }} />
          </div>
        </section>
      </>
    );
  }
}

export default Section;
