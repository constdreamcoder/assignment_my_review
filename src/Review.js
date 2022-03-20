import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

const Review = (props) => {
  const history = useHistory();
  const circle = props.loop_num;

  const location = useLocation();
  const day = location.pathname[location.pathname.length - 1];

  const [clickedNumber, setNumber] = React.useState();
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
                  backgroundColor: i <= clickedNumber ? "#FFEB3B" : "#DDDDDD",
                }}
              ></Success>
            );
          })}
        </Line>
        <Btn
          onClick={() => {
            history.push("/");
          }}
        >
          평점 남기기
        </Btn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
`;

const Day = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
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

const Btn = styled.button`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: rgb(255, 255, 255);
`;

export default Review;
