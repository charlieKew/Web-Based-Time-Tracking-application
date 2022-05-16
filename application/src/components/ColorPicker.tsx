import { ColorInput } from "@mantine/core";
import { useState } from "react";

export default function ColorPicker() {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        width: "5vw",
      }}
    >
      <ColorInput disallowInput value={value} onChange={setValue} />
    </div>
  );
}
