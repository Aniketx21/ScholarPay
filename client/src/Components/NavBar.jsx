import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { UserLogout } from "../Redux/AuthReducer/action";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    dispatch(UserLogout(token))
      .then((res) => {
        console.log(res);
        toast({
          title: 'Logout Successful',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: 'Logout Falied',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      });

  };

  return (
    <DIV>
      <Link className="link" to="/">
        <div className="logo">ScholarPay</div>
      </Link>
      <div className="link-container">
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link" to="/admin">
          Admin
        </Link>
        <div className="link" onClick={handleLogout}>
          <RiLogoutBoxRLine />
        </div>
      </div>

      <Box className="Drawer">
        <GiHamburgerMenu ref={btnRef} onClick={onOpen} fontSize={"25px"} />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}

            <DrawerBody
              display={"flex"}
              flexDirection={"column"}
              gap={5}
              mt={10}
            >
              <Link className="link-2" to="/dashboard" onClick={onClose}>
                Dashboard
              </Link>
              <Link className="link-2" to="/admin" onClick={onClose}>
                Admin
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ed8936;

  .logo {
    font-weight: 900;
    font-size: 30px;
  }

  .link-container {
    display: flex;
    align-items: center;
  }

  .link {
    margin-left: 30px;
    font-size: large;
    /* font-weight: 500; */
  }

  .Drawer {
    display: none;
  }

  @media (max-width: 615px) {
    .link-container {
      display: none;
    }

    .Drawer {
      display: block;
    }
  }
`;
