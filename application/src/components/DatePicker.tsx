import React, { useState } from "react";
import { Calendar } from "@mantine/dates";

export default function DatePicker() {
  const [value, setValue] = useState<any>();

  return <Calendar value={value} onChange={setValue} />;
}
