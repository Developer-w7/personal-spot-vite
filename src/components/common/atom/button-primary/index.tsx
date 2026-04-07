import "./style.css";

import React from "react";

type ButtonPrimaryProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  style: React.CSSProperties;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  onClick,
  label,
  style,
}) => {
  return (
    <button style={style} className="button-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonPrimary;
