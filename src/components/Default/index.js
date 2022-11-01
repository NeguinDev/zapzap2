import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Seja bem-vindo ao ZapZap 2</C.Title>
      <C.Info>
        Um chat de mensagens feito com ReactJs com layout inspirado no WhatsApp.
      </C.Info>
    </C.Container>
  );
};

export default Default;
