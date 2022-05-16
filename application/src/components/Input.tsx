import { Input, Modal, TextInput, Text } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useState } from "react";
import { Space } from "tabler-icons-react";
import ButtonStart from "./ButtonStart";
import DatePicker from "./DatePicker";

function ProjectInput() {
  return (
    <div
      style={{
        width: "80vw",
      }}
    >
      <TextInput placeholder="What is your project name?" />
    </div>
  );
}

function TimeDisplay({ time }: any) {
  const [opened, setOpened] = useState(false);
  return (
    <div
      style={{
        width: "3vw",
      }}
    >
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Editing Entry"
      >
        {
          /* Modal content */
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TimeEdit /> - <TimeEdit /> <ButtonStart />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DatePicker />
            </div>
          </>
        }
      </Modal>

      <Input component="button" onClick={() => setOpened(true)}>
        {time}
      </Input>
    </div>
  );
}

function TimeEdit() {
  return (
    <div
      style={{
        width: "4vw",
      }}
    >
      <TimeInput></TimeInput>
    </div>
  );
}

export { ProjectInput, TimeDisplay, TimeEdit };
