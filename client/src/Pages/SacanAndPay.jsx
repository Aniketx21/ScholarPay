import styled from "styled-components"
// import QRCode from "react-qr-code";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { Navigate} from "react-router-dom";

export const SacanAndPay = () => {
  const [scanResult, setScanResult] = useState(null);  

  useEffect(()=>{

    const scanner = new Html5QrcodeScanner("reader",{
      qrbox: {
        width: 250, 
        height: 250,
      }, 
      fps: 10,
    })

    scanner.render(success, error);

    function success (result) {
      scanner.clear();
      setScanResult(result);
    }
  
    function error (error) {
      console.warn(error);
    }

  },[])

  return scanResult ? <Navigate to={`/payments/scan&pay/pay/${scanResult}`}/> : <Container><div id="reader" className="scanner"></div></Container>
}


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;

#reader{
  width: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: solid red 20px;

}
`
