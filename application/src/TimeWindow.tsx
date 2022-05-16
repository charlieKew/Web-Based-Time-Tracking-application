import React from "react";
import { AlignLeft, Space } from "tabler-icons-react";
import ColorPicker from "./components/ColorPicker";
import Entries from "./components/Entries";
import InputBar from "./components/InputBar";
import Tracker from "./components/Tracker";

export default function TimeWindow() {
  return (
    <div>
      <InputBar></InputBar>
      <Entries />
    </div>
  );
}
