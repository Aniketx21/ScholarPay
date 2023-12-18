import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";


export default function AddMoneyModal({ userName, userID }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    const newData = {
      amount,
    };
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .patch(`http://localhost:8080/users/sendMoney/${userID}`, newData, config)
      .then((res) => {
        console.log(res);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Button onClick={onOpen} className="btn">
        Add Money
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Money to {userName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Abount"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleAdd}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  .btn {
    margin-right: 30px;
    background-color: #0bce66;
  }
`;
