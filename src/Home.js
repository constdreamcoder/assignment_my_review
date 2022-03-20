import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const loop_num = props.loop_num;
  const star = loop_num.map((num, idx) => <Star></Star>);
  return (
    <>
      <Wrapper>
        <Title>내 일주일은?</Title>
        {days.map((day, idx) => {
          return (
            <Line>
              <Today>{day}</Today>
              {star}
              <Arrow
                onClick={() => {
                  history.push("/review");
                }}
              ></Arrow>
            </Line>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Today = styled.p`
  margin: 0px 0.5rem 0px 0px;
  font-weight: bold;
`;

const Star = styled.div`
width: 30px;
height: 30px;
border-radius: 30px;
margin: 5px;
background-color: rgb(255, 235, 59);
}
`;

const Arrow = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default Home;
