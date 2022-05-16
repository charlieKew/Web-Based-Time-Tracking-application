import { Input, Textarea } from "@mantine/core";
import { Text } from "@mantine/core";

import React from "react";
import { Space } from "tabler-icons-react";
import ButtonStart from "./ButtonStart";
import ColorPicker from "./ColorPicker";
import { ProjectInput, TimeDisplay } from "./Input";

//All of the components that make the top input bar

export default function InputBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
      }}
    >
      <ProjectInput></ProjectInput>
      <TimeDisplay time={"00:00"}></TimeDisplay>
      <ColorPicker />
      <ButtonStart />
    </div>
  );
}
