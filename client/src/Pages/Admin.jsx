import { Avatar, Button, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AddMoneyModal from "../Components/AddMoneyModal";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";

export const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [state, setState] = useState(false);
  const toast = useToast()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let data = {
      email,
      password,
    };

    axios.post("http://localhost:8080/users/login", data)
      .then((res)=>{
        setState(true);
        toast({
          title: res.data.msg,
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      })
      .catch((error)=>{
        toast({
          title: error.response.data.msg,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      })
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    {
      state? 
    <Container>
      {userData.map((user, i) => {
        return (
          <div className="card">
            <div className="mini-cont">
              <div>
                <Avatar name={user.name} src={user.img} />
              </div>
              <div className="cont">
                <p>{user.name}</p>
                <p>Available balance: {user.amount === "" ? 0 : user.amount}</p>
              </div>
            </div>
            <div>
              <AddMoneyModal userID={user._id} userName={user.name}/>
            </div>
          </div>
        );
      })}
    </Container>
    :
    <DIV>
        <Box className="login-from-container">
          <Box fontSize={30} textAlign={"centre"} fontWeight={600} mb={10}>
           Login
          </Box>
          <FormControl mb={10}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
  
          <FormControl>
            <FormLabel>Enter Password</FormLabel>
            <Input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            bg={"#ED8936"}
            w={"100%"}
            mt={5}
            size="md"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </DIV>
    }
    </>
  );
};

const Container = styled.div`
  width: 90%;
  border: solid lightgray 1px;
  margin: 40px auto;
  border-radius: 10px;
  padding: 10px;

  .card {
    display: flex;
    border: solid lightgray 1px;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .mini-cont{
    display: flex;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    gap: 20px;
  }

  .cont{
    text-align: left;
  }

`;

const DIV = styled.div`
  margin-top: 80px;

  .login-from-container {
    width: 400px;
    margin: auto;
    border: solid lightgray 1px;
    padding: 20px;
    border-radius: 5px;
  }

  .loginlink{
    font-style: italic;
    text-decoration: underline;
    color: red;
  }

  @media (max-width: 415px) {
    .login-from-container {
      width: 100%;
      margin: auto;
      border: solid lightgray 1px;
      padding: 20px;
      border-radius: 5px;
    }
  }
`;


