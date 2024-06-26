import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary">Ashish Yadav</h1>
      <h1 className="text-7xl sm:text-3xl text-white">I am a software engineer</h1>
      <p className="text-white w-2/3">
        I am a full stack developer. Currently I am doing MCA from Gurunanak Institute Of Technology.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
    </div>
  );
};

export default Intro;
