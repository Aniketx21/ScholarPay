import styled from "styled-components"
import { Button, Input } from '@chakra-ui/react'
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Merchant() {
  return (
    <Container>
      <BsShop className="logo"/>
      <label className="lable">Merchant name</label>
      <Input placeholder="Merchant name" className="input-box" />
      <label>GST number</label>
      <Input placeholder="GST number" className="input-box" />
      <label>Email Address</label>
      <Input placeholder="Email Address" type="number" className="input-box" />
      <label>OTP</label>
      <Input placeholder="Enter OTP" className="input-box" />
      <Link to={"/payments/banktransfer"}>
      <Button className="btn" bg={"#ED8936"}>
        Verify
      </Button>
      </Link>
      <br />
      <br />
    </Container>
  );
}

const Container = styled.div`
    width: 400px;
    margin: auto;
    border: solid lightgray 1px;
    border-radius: 10px;
    margin-top: 50px;
    text-align: left;

    .logo{
        margin: auto;
        font-size: 70px;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .input-box{
        width: 90%;
        margin: 0px 20px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .btn{
        width: 90%;
        margin-bottom: 10px;
        margin-left: 20px;
        margin-top: 10px;
    }

    label{
        margin-left: 25px;
        font-weight: 600;
    }

    @media (max-width: 435px){
        width: 350px
    }

    @media (max-width: 365px){
        width: 300px
    }
`
