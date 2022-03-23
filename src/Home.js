import React from "react";
import styled from "styled-components";
import "./Arrow.css";
import "./Title.css";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const circle = props.loop_num;
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  // create an new week array with the standard of today index.
  const [today, setToday] = React.useState(new Date().getDay());
  const newWeek = week.slice(today).concat(week.slice(0, today));

  return (
    <Wrapper>
      <h1>
        <span>내</span>
        <span> </span>
        <span>일</span>
        <span>주</span>
        <span>일</span>
        <span>은</span>
        <span>?</span>
      </h1>
      {newWeek.map((day, idx) => {
        const num = Math.floor(Math.random() * 5);
        return (
          <Line key={idx}>
            <Today>{day}</Today>
            {circle.map((e, i) => {
              return (
                <Success
                  key={e}
                  style={{
                    backgroundColor: i <= num ? "#F1E1A6" : "#DDDDDD",
                  }}
                ></Success>
              );
            })}
            <div
              className="button-up"
              onClick={() => {
                history.push(`/review/${day}`);
              }}
            ></div>
          </Line>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 63vh;
  margin: 5vh auto;
  padding: 4vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Today = styled.p`
  content: counter(step-counter);
  margin: 0px 5px 0px 0px;
  font-size: 20px;
  background-color: rgb(0, 200, 200);
  color: white;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 3px;
`;

const Success = styled.div`
width: 30px;
height: 30px;
border-radius: 30px;
margin: 5px;
}
`;

export default Home;
