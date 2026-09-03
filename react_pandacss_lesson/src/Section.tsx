import CodeView from "./CodeView";

function Section({ children, width, height, bg, code, flex = false }) {
  if (flex) {
    return (
      <>
        <section id="center1" style={{ display: "flex", height: height }}>
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
          <CodeView code={code} />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id="center1">
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
