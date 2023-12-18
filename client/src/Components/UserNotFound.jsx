import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { BiSolidError } from "react-icons/bi";
import { Button } from '@chakra-ui/react'



export default function UserNotFound() {
  const navTo = useNavigate();

  return (
    <Container>
      <BiSolidError className="logo"/>
      <p>Kindly note that this account is not an authorized banking facility. Redirecting to payments page...!!</p>
      <Button mt={5} onClick={()=> navTo("/payments")}>Go to Payments page</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  .logo{
    font-size: 200px;
  }
`