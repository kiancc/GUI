import {useState} from 'react';

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

function China({onChinaClick}){
  return(
    <div id="china" onClick={onChinaClick}></div>
  )
}

function USA({onUSAClick}){
  return(
    <div id="usa" onClick={onUSAClick}></div>
  )
}

function InfoBox({isUSA}){
  if(isUSA === true){
    return(
      <div id="infobox">
        <h1>USA</h1>
        <p>Apple - 1,973</p>
        <p>Microsoft - 1,617</p>
        <p>Amazon - 1,598</p>
        <p>Alphabet - 1,196</p>
        <p>Facebook - 785</p>
      </div>
    )
  }else{
    return(
      <div id="infobox">
        <h1>China</h1>
        <p>Alibaba- 759</p>
        <p>Tencent - 730</p>
        <p>Samsung - 368</p>
        <p>Meituan - 239 </p>
      </div>
    )
  }
}

function App() {

  const [isUSA, setIsUSA] = useState(true);

  return (
    <>
    <Map />
    <Pin pinTop={'204px'} pinLeft={'136px'} />
    <Pin pinTop={'204px'} pinLeft={'941px'} />
    <China onChinaClick={() => setIsUSA(false)}/>
    <USA onUSAClick={() => setIsUSA(true)}/>
    <InfoBox isUSA={isUSA}/>
    </>
  );
}

export default App;