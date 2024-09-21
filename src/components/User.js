import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    // console.log("Use Effect UserFunction");
  }, []);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1> <br />
      <h2>Name: {props.name}</h2>
      <h3>Location: Noida</h3>
      <h4>Contact: @shekharsajwan</h4>
    </div>
  );
};

export default User;
