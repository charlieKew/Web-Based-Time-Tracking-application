import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Plus } from "tabler-icons-react";

function ButtonStart() {
  return (
    <div>
      <ActionIcon color="blue">
        <Plus />
      </ActionIcon>
    </div>
  );
}

export default ButtonStart;
