import React from "react";

type stackContainerProps = {
  name: string;
};

export const stackContainer = ({ name }: stackContainerProps) => {
  return (
    <div className="stackContainer">
      <h3 className="stackHeader">{name}</h3>
    </div>
  );
};
