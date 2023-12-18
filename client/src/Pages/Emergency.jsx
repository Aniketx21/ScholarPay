import styled from "styled-components";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function Emergency() {
  return (
    <Container>
      <div className="container">
        <RiSecurePaymentFill className="logo" />
        <h1 className="heading">Emergency Pay</h1>
      </div>
      <p className="desc">
        In case of emergencies, please reach out to our dedicated emergency
        contact team. You can contact us via email at
        scholarpayemergency@gmail.com or call us directly at +91 (555) 123-4567.
        We are available 24/7 to provide immediate assistance and support. Your
        safety and well-being are our top priorities. Feel free to contact us
        anytime you need urgent assistance or information. Additionally, please
        ensure to share this contact information with relevant individuals who
        may need it during emergency situations. Thank you for your attention to
        this matter, and stay safe.
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  margin: auto;
  border: solid lightgray 1px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 100px;

  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .heading {
    font-size: 40px;
  }

  .logo {
    font-size: 60px;
    width: max-content;
  }

  .desc {
    text-align: left;
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }

  @media (max-width: 930px) {
    width: 90%; 
  }

  @media (max-width: 435px) {
    width: 350px; 

    .heading{
        font-size: 30px;
    }
  }

  @media (max-width: 365px) {
    width: 300px;

    .heading{
        font-size: 25px;
    }
  }
`;
