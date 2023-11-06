import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { UserSignUp } from "../Redux/AuthReducer/action";
import { Link, useNavigate } from "react-router-dom";
import { LOGINSIGNUP_FALIURE, LOGINSIGNUP_SUCCESS } from "../Redux/actionTypes";
import { useToast } from '@chakra-ui/react'

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navTo = useNavigate();
  const toast = useToast();

  const handleSignUp = () => {
    let data = {
      name,
      email,
      password,
      college: "",
      phone: "",
    };
    dispatch(UserSignUp(data)).then((res)=>{
      dispatch({type : LOGINSIGNUP_SUCCESS})
      toast({
        title: res.data.msg,
        description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      navTo("/login");
    })
    .catch((error) =>{
      dispatch({type : LOGINSIGNUP_FALIURE})
      console.log(error);
      toast({
        title: error.response.data.error,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    })
  };

  return (
    <DIV>
      <Box className="login-from-container">
        <Box fontSize={30} textAlign={"centre"} fontWeight={600} mb={10}>
          SignUp
        </Box>

        <FormControl mb={10}>
          <FormLabel>Enter User Name</FormLabel>
          <Input
            type="text"
            placeholder="User Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

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

        <Box mt={5}>
          <Link to={"/login"}>Already have a account? <span className="loginlink">Login</span></Link>
        </Box>

        <Button
          bg={"#ED8936"}
          w={"100%"}
          mt={10}
          size="md"
          onClick={handleSignUp}
        >
          SignIn
        </Button>
      </Box>
    </DIV>
  );
};

const DIV = styled.div`
  margin-top: 50px;

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
