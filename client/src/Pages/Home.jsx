import styled from "styled-components";
import home1 from "../images/home1.jpg";

export const Home = () => {

  return (
    <DIV>
      <div className="container-1">
        <div className="img-container-1">
          <img src={home1} alt="error" />
        </div>
        <div className="pera-1">
          <p>
            <span className="span-first-words">Introducing "Scholar Pay"</span>{" "}
            <br /> <br />{" "}
            <span className="span-first-words-2">
              Bridging the Gap between Student and Scholarship provider .{" "}
            </span>{" "}
            <br /> <br /> In an age where access to education is increasingly
            essential for personal and societal growth, scholarships serve as
            lifelines for countless students seeking to pursue their dreams.
            These financial awards, whether granted by private foundations or
            government sectors, are intended to alleviate the burden of
            educational expenses and empower students to focus on their academic
            journey. However, the noble purpose behind scholarships can
            sometimes be overshadowed by instances of misuse and misallocation
            of funds. Recognizing the importance of channeling scholarship funds
            towards their intended educational objectives, we are proud to
            present Scholar Pay." This innovative application is poised to
            revolutionize the way students manage their scholarship funds,
            ensuring that these valuable resources are dedicated exclusively to
            legitimate academic needs "Scholar Pay" is designed to establish a
            seamless connection between students and the organizations providing
            them with scholarships. It functions as a dedicated payment platform
            tailored to students' academic necessities. The essence of this
            application lies in its unwavering commitment to responsible and
            accountable financial management
          </p>
        </div>
        <div className="img-container-2">
          <img src={home1} alt="error" />
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .container-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 20px;
    margin-top: 70px;
  }

  .img-container-1 {
    display: none;
  }

  .img-container-2 {
    margin: 20px;
  }

  img {
    width: 400px;
    border-radius: 20px;
  }

  .pera-1 {
    width: 50%;
    text-align: start;
    margin-right: 20px;
  }

  .span-first-words {
    font-size: 40px;
    text-transform: uppercase;
  }

  .span-first-words-2 {
    font-weight: 900;
  }

  .link {
    margin: 20px;
    font-size: 30px;
    background-color: azure;
    padding: 20px;
    max-width: max-content;
    border-radius: 10px;
  }

  @media (max-width: 1240px) {
    .container-1 {
      display: block;
    }

    .pera-1 {
      width: 90%;
      margin: auto;
    }
  }

  @media (max-width: 520px) {
    .img-container-1 {
      display: block;
      margin: auto;
      margin-bottom: 30px;
    }

    img {
      margin: auto;
      width: 90%;
    }

    .img-container-2 {
      display: none;
    }
  }
`;
