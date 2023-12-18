import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  useDisclosure,
} from "@chakra-ui/react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { UserLogout } from "../Redux/AuthReducer/action";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
//popover from chakra Ui imports
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [userName, setuserName] = useState("");
  const [userImage, setUserImage] = useState("");

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    dispatch(UserLogout(token))
      .then((res) => {
        console.log(res);
        toast({
          title: "Logout Successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Logout Falied",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserImage(localStorage.getItem("userImage"));
    setuserName(localStorage.getItem("username"));
  }, []);

  return (
    <DIV>
      <Link className="" to="/">
        <div className="logo">ScholarPay</div>
      </Link>
      <div className="link-container">
        <div>
          <Link to={"/payments"}>
            <FaMoneyBillTrendUp className="payment" />
          </Link>
        </div>
        <div className="popover">
          <Popover>
            <PopoverTrigger>
              <Avatar
                name={localStorage.getItem("username")}
                src={localStorage.getItem("userImage")}
                size={"md"}
                className="avatar"
              />
            </PopoverTrigger>
            <PopoverContent mr={5}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <div>
                  <Avatar
                    name={localStorage.getItem("username")}
                    src={localStorage.getItem("userImage")}
                    mb={3}
                    size={"xl"}
                  />
                  <p>{localStorage.getItem("username")}</p>
                </div>
              </PopoverHeader>
              <PopoverBody>
                <div className="link-Container-2">
                  {localStorage.getItem("token") && (
                    <Link className="link" to={"/accountDetails"}>
                      User Account details
                    </Link>
                  )}
                  <Link className="link" to="/">
                    Home
                  </Link>
                  <Link className="link" to="/login">
                    Login
                  </Link>
                  <Link className="link" to="/signup">
                    SignUp
                  </Link>
                  <Link className="link" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="link" to="/admin">
                    Provider Access
                  </Link>
                </div>
                {localStorage.getItem("token") && (
                  <div className="logout-btn" onClick={handleLogout}>
                    <p>Logout</p>
                    <RiLogoutBoxRLine />
                  </div>
                )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  background-color: #ed8936;

  .logo {
    font-weight: 900;
    font-size: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .link-Container-2 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 20px;
    gap: 10px;
    width: 100%;
  }

  .link {
    font-size: large;
    cursor: pointer;
  }

  .Drawer {
    display: none;
  }

  .logout-btn {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
      background-color: lightgray;
    }
  }

  .payment {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    .avatar {
      width: 40px;
      height: 40px;
    }

    .payment {
      font-size: 25px;
    }
  }
`;
