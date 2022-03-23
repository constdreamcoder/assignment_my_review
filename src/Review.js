import React from "react";
import styled from "styled-components";
import "./Button.css";
import { useHistory, useLocation } from "react-router-dom";

const Review = (props) => {
  const history = useHistory();
  const circle = props.loop_num;

  const location = useLocation();
  const day = location.pathname[location.pathname.length - 1];

  const [clickedNumber, setNumber] = React.useState();

  React.useEffect(() => {
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setNumber(parseInt(e.key - 1));
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <>
      <Wrapper>
        <Title>
          <Day>{day}요일</Day> 평점 남기기
        </Title>
        <Line>
          {circle.map((e, i) => {
            return (
              <Success
                key={e}
                onClick={() => {
                  setNumber(i);
                }}
                style={{
                  backgroundColor: i <= clickedNumber ? "#F1E1A6" : "#DDDDDD",
                }}
              ></Success>
            );
          })}
        </Line>
        <div
          className="btn-9"
          onClick={() => {
            history.push("/");
          }}
        >
          평점 남기기
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 35vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Title = styled.h3`
  text-align: center;
`;

const Day = styled.div`
  display: inline-block;
  color: rgb(255, 255, 255);
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
  color: white;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Success = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
}
`;

export default Review;
