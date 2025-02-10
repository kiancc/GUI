function Map(){
  return(
    <div id="map"></div>
  )
}


function China(){
  return(
    <div id="china"></div>
  )
}

function USA(){
  return(
    <div id="usa"></div>
  )
}

function Pin({pinTop, pinLeft}){
  return(
    <div className="pin" style={{top: pinTop, left: pinLeft}}></div>
    )
}

function App() {
  return (
    <>
    <Map />
    <Pin pinTop={'204px'} pinLeft={'136px'} />
    <Pin pinTop={'204px'} pinLeft={'941px'} />
    <USA />
    <China />
    </>
  );
}

export default App;
