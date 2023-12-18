import { RiBankLine } from "react-icons/ri"
import styled from "styled-components"
import { Button, Input } from '@chakra-ui/react'
import { useState } from "react"

export default function BankTransfer() {
    const [AccountNumber, setAccountNumber] = useState("");

  return (
    <Container>
        <RiBankLine className="logo"/>
        <label className="lable">Bank account name</label>
        <Input placeholder='Bank account name' className="input-box"/>
        <label>Account holder name</label>
        <Input placeholder='Account holder name' className="input-box"/>
        <label>Account number</label>
        <Input placeholder='Account number' type="number" onChange={(e) => setAccountNumber(e.target.value)} className="input-box"/>
        <label>IFSC code</label>
        <Input placeholder='IFSC code' className="input-box"/>
        <Button className="btn" bg={"#ED8936"}>Verify</Button>
        <br />
        <br />
    </Container>
  )
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