import React from "react";

const curDate = new Date();
const curTime = curDate.getHours();
console.log(curTime);

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "2px solid yellow",
  display: "inline"
};
let greeting;

function Greetings() {
  if (curTime > 0 && curTime < 12) {
    greeting = "Good Morning";

    customStyle.color = "green";
  } else if ((curTime) => 12 && curTime < 18) {
    greeting = "Good Afternoon";

    customStyle.color = "Blue";
  } else {
    greeting = "Good  Night";

    customStyle.color = "yello";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}
export default Greetings;
