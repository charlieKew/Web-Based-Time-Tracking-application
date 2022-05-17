import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { TimeDisplay } from "./Input";

export default function Entries() {
  const [backendData, setBackendData] = useState<any>([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
      });
  }, []);

  const rows = backendData.map((backendData: any) => (
    <tr key={backendData.project}>
      <td width="1506">{backendData.project}</td>
      <td>{backendData.time}</td>
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
