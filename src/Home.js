import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const circle = props.loop_num;
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  // const [week, setWeek] = React.useState([
  //   { day: "일", rate: 3 },
  //   { day: "월", rate: 4 },
  //   { day: "화", rate: 1 },
  //   { day: "수", rate: 2 },
  //   { day: "목", rate: 5 },
  //   { day: "금", rate: 2 },
  //   { day: "토", rate: 3 },
  // ]);

  return (
    <Wrapper>
      <Title>내 일주일은?</Title>
      {week.map((day, idx) => {
        const num = Math.floor(Math.random() * 5);
        return (
          <Line key={idx}>
            <Today>{day}</Today>
            {circle.map((e, i) => {
              return (
                <Success
                  key={e}
                  style={{
                    backgroundColor: i <= num ? "#FFEB3B" : "#DDDDDD",
                  }}
                ></Success>
              );
            })}
            <Arrow
              onClick={() => {
                history.push(`/review/${day}`);
              }}
            ></Arrow>
          </Line>
        );
      })}
    </Wrapper>
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

const Success = styled.div`
width: 30px;
height: 30px;
border-radius: 30px;
margin: 5px;
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
