import styled from "styled-components";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Payments() {
  
  return (
    <Container>
      {/* Box-1 */}
      <Link to={"/payments/scan&pay"}>
        <div className="wrapper">
          <MdOutlineQrCodeScanner className="logo"/>
          <p className="semi-content">Scan and Pay</p>
        </div>
      </Link> 

      {/* Box-2 */}
      <Link to={"/payments/banktransfer"}>  
        <div className="wrapper">
        <RiBankLine className="logo"/>
        <p className="semi-content">Bank Transfer</p>
        </div>
      </Link>

      {/* Box-3 */}
      <Link to={"/payments/merchant"}>
        <div className="wrapper">
        <BsShop className="logo"/>
        <p className="semi-content">Merchant Pay</p>
        </div>
      </Link>

      {/* Box-4 */}
      <Link to={"/payments/Emergency"}>
        <div className="wrapper">
        <RiSecurePaymentFill className="logo" />
        <p className="semi-content">Emergency Pay</p>
        </div>
      </Link>

    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: max-content;
  margin: 50px auto;
  grid-gap: 50px;  

  .wrapper {
    height: 200px;
    width: 200px;
    border: solid lightgray 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  .logo{
    font-size: 100px;
  }

  @media (max-width: 500px){

    grid-gap: 30px;

    .wrapper{
        width: 150px;
        height: 150px;
    }

    .logo{
        font-size: 60px;
    }
  }

  @media (max-width: 350px){

    .wrapper{
        width: 120px;
        height: 120px;
    }

    .logo{
        font-size: 50px;
    }

    .semi-content{
      font-size: 15px;
    }

  }

  @media (max-width: 290px){
    grid-gap: 20px;
  }
`;
