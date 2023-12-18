import styled from "styled-components";
import { Avatar, Button } from "@chakra-ui/react";
import { BsShieldFillCheck } from "react-icons/bs";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserFound({ userData }) {

    const [amount, setAmount] = useState(0);
    const [note, setNote] = useState("");
    const [current, setCurrent] = useState(false);
    const navTo = useNavigate();
    

    function formatDate() {
        const currentDate = new Date();
        const day = ('0' + currentDate.getDate()).slice(-2); 
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
        const year = currentDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
      

    const handlePay = () =>{
        const newData = {
            ...userData,
            amount,
            date: formatDate()
        }
        let config = {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
        };
        axios.patch(`http://localhost:8080/users/sendMoney/${userData._id}`, newData, config)
            .then((res)=>{
                setCurrent(true)
                setTimeout(()=>{
                    navTo("/")
                },5000)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

  return (
    <>
    {
        current ? (
            <Wrapper>
                <BsShieldFillCheck className="logo"/>    
                <h1 className="heading">Payment done succesfully</h1>
            </Wrapper>
        )
        :(
            <Container>
            <Avatar name={userData.name} src={userData.img} size={"xl"} />
            <div className="heading-wrapper">
                <h1 className="heading">Paying {userData.name}</h1>
                <BsShieldFillCheck className="verified-icon" />
            </div>
            <Input type="number" placeholder="₹0000" className="amount-input" onChange={(e)=> setAmount(e.target.value)}/>
            <Input type="text" placeholder="Add a note" className="note-input" onChange={(e)=> setNote(e.target.value)}/>
            <Button size="lg" className="payButton" onClick={handlePay}>
                Pay
            </Button>
            </Container>
        )
    }
    </>
  );
}

const Container = styled.div`
  padding: 20px;
  margin: 30px auto;
  border-radius: 10px;

  .heading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
  }

  .heading {
    font-size: larger;
    margin-left: 20px;
  }

  .verified-icon {
    font-size: 20px;
    color: #68d391;
  }

  .amount-input {
    width: 200px;
    height: 60px;
    font-size: 25px;
    text-align: center;
    display: block;
    margin: 20px auto;
  }

  .note-input {
    width: 150px;
    font-size: 16px;
    text-align: center;
    background-color: lightgray;
    border-radius: 15px;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }

  .payButton{
    border-radius: 15px;
    background-color: #ED8936;
  }
`;

const Wrapper = styled.div`
    height: 41.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #38A169;

    .logo{
        font-size: 50px;
    }

    .heading{
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }
`