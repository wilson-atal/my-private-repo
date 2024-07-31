// import React from 'react';

interface ButtonGroupProps {
  width?: string;
  beforeText?: string;
  endText?: string;
  children: React.ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ width, beforeText, endText, children }) => {
  return (
    <div className="flex justify-center mb-2" style={{ width }}>
      {beforeText && <div className="mr-2">{beforeText}</div>}
      <div className="flex gap-4">{children}</div>
      {endText && <div className="ml-2">{endText}</div>}
    </div>
  );
};

export default ButtonGroup;
