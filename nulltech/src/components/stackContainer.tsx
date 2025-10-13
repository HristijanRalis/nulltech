type stackContainerProps = {
  name: string;
};

export const StackContainer = ({ name }: stackContainerProps) => {
  return (
    <div className="stackContainer">
      <h3 className="stackHeader">{name}</h3>
    </div>
  );
};
