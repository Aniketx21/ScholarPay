import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserFound from "./UserFound";
import UserNotFound from "./UserNotFound";
import { useToast } from "@chakra-ui/react";

export default function ScanAndPayForm() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  const [check, setCheck] = useState(false);
  const toast = useToast(); 

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users?userID=${id}`)
      .then((res) => {
        setUserData(res.data);
        setCheck(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, userData]);

  if(!check){
    return null
  }

  return (
    <div>
      {userData?._id === id ? (
        <UserFound userData={userData} />
      ) : (
        <UserNotFound />
      )}
    </div>
  );
}
