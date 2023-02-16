import React from "react";

const Skills = () => {
  return (
    <div className="about skills">
      <h2 className="title2"> Professional Skills</h2>

      <div className="box">
        <h4>JavaScript</h4>
        <div className="percent">
          <div style={{ width: "80%" }}></div>
        </div>
      </div>

        <div className="box">
            <h4>TypeScript</h4>
            <div className="percent">
                <div style={{ width: "60%" }}></div>
            </div>
        </div>

        <div className="box">
            <h4>React</h4>
            <div className="percent">
                <div style={{ width: "75%" }}></div>
            </div>
        </div>

        <div className="box">
            <h4>React-Router</h4>
            <div className="percent">
                <div style={{ width: "90%" }}></div>
            </div>
        </div>

        <div className="box">
            <h4>Redux</h4>
            <div className="percent">
                <div style={{ width: "70%" }}>  </div>
            </div>
        </div>

    </div>
  );
};

export default Skills;
