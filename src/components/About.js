import React, { useEffect } from "react";

import UserClass from "./UserClass";
const AboutComponent = () => {
  useEffect(() => {
    // console.log("useEffect AboutComponent");
  }, []);

  return (
    <div>
      <h2>About Us Page</h2>
      <br />
      <UserClass />
    </div>
  );
};

export default AboutComponent;
