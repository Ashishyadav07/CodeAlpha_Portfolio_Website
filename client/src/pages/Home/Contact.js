import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const user = {
    name: "Ashish Yadav",
    age: 20,
    email: "ashishyadav25800@gmail.com",
    mobile: 7988952597,
    country: "India",
  };
  return (
    <div>
      <SectionTitle title="About me" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex-col space-y-5">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} :</span>
              <span className="text-tertiary">{" " + user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/09f5c2ad-def8-4fc4-a293-3dcfa13dba2d/gKsi4Nn0ZU.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
