function Map(){
  return(
    <div id="map"></div>
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
    </>
  );
}

export default App;
