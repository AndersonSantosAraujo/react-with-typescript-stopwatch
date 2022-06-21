import React from "react";
import style from "./Botao.module.scss";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Botao = ({ children, type, onClick }: Props) => {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
};

export default Botao;
