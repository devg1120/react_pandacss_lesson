import CodeView from "./CodeView";

function Section({ children, width, height, bg, code }) {
  return (
    <>
      <section id="center1" style={{ display: "flex", height: height }}>
        <div style={{ border: "solid 1px gray", margin: "0px", padding: "20px", width: width, backgroundColor: bg }}>{children}</div>
        <CodeView code={code} />
      </section>
    </>
  );
}

export default Section;
