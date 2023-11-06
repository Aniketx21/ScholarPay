import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { UserLogin } from "../Redux/AuthReducer/action";
import { LOGINSIGNUP_FALIURE, LOGINSIGNUP_SUCCESS } from "../Redux/actionTypes";
import { useToast } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast()
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    let data = {
      email,
      password,
    };

    dispatch(UserLogin(data))
      .then((res) => {
        dispatch({ type: LOGINSIGNUP_SUCCESS });
        console.log(res)
        localStorage.setItem("token", res.data.token);
        toast({
          title: res.data.msg,
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate(location.state, {replace : true});
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: LOGINSIGNUP_FALIURE });
        toast({
          title: error.response.data.msg,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      });
  };

  return (
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

        <Box mt={5}>
          <Link to={"/signup"}>Don't have a account? <span className="loginlink">signup</span></Link>
        </Box>

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
  );
};

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
