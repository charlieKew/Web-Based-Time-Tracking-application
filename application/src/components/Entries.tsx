import { Table } from "@mantine/core";
import { TimeDisplay } from "./Input";

const elements = [
  { project: "Dummy1", time: <TimeDisplay time={"21:00"} /> },
  { project: "Dummy2", time: <TimeDisplay time={"05:01"} /> },
  { project: "Dummy3", time: <TimeDisplay time={"08:06"} /> },
  { project: "Dummy4", time: <TimeDisplay time={"31:20"} /> },
  { project: "Dummy5", time: <TimeDisplay time={"03:00"} /> },
];

export default function Entries() {
  const rows = elements.map((element) => (
    <tr key={element.project}>
      <td width="1506">{element.project}</td>
      <td>{element.time}</td>
    </tr>
  ));
  return (
    <Table highlightOnHover>
      <thead></thead>
      <tbody>{rows}</tbody>
      <tfoot></tfoot>
    </Table>
  );
}
