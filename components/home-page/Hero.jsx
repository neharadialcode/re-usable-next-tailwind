import React, { useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(false);
  console.log("abc", count);
  return (
    <div>
      <h1 className="text-red-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum hic
        maxime suscipit quidem esse earum. Eligendi earum, nulla atque repellat
        saepe ullam doloremque, veniam impedit, non assumenda expedita velit
        quasi?
      </h1>
      <button className="common-btn" onClick={() => setCount(true)}>
        Common button
      </button>
    </div>
  );
};

export default Hero;
