import React, { ReactNode, FC } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="grid mr-8 ml-8 bg-white border border-gray-200 rounded-lg shadow">
      {children}
    </div>
  );
};
export default Container;
