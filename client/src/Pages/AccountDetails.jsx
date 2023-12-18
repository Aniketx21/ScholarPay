import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { Avatar } from "@chakra-ui/react";

export default function AccountDetails() {
  const id = localStorage.getItem("userID");
  const [user, SetUser] = useState({});
  const [history, setHistory] = useState([]);

  const userHistory = () => {
    axios
      .get(`http://localhost:8080/users/userhistory?userID=${id}`)
      .then((res) => {
        setHistory(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users?userID=${id}`)
      .then((res) => {
        SetUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    userHistory();
  }, []);

  return (
    <Container>
      <div className="avatar">
        <Avatar name={user.name} src={user.img} size={"xl"} />
        <p className="name">{user.name}</p>
      </div>
      <div className="amount">
        Available balance : {user.amount === "" ? 0 : user.amount}
      </div>
      <div className="history">
        {history?.map((history, i) => {
          return (
            <div key={i} className="historyCard">
              <div>
                <Avatar name={history.name} src={history.img} size={"lg"} />
              </div>
              <div className="innerContent">
                <div>
                  <p>{history.name}</p>
                  <p>{history.amount} Rs</p>
                </div>
                <p>{history.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .name {
    margin-top: 10px;
    font-size: 20px;
    width: 250px;
  }

  .amount {
    font-size: 22px;
    margin: 20px;
    font-weight: 600;
  }

  .history {
    width: 90%;
  }

  .historyCard {
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 20px;
    border: solid lightgray 1px;
    border-radius: 10px;
  }

  .innerContent{
    display: flex;
    justify-content: space-between;
    width: 80%;
    text-align: left;
  }
`;
