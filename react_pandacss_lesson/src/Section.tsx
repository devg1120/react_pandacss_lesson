import CodeView from './CodeView'

function Section({ children , width, height, bg, code } ) {

  return (
    <>
      <section id="center1" style={{display: "flex", height: height}}>
        <div style={{width:width , margin: "10px",backgroundColor: bg}}>
	     {children}
	</div>
        <CodeView  code={code} />
      </section>

    </>
  )
}

export default Section
