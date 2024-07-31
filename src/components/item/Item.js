import React from "react";
import { Button, Table } from "reactstrap";

export default function Item(props) {
  const { item, handle_del } = props;
  return (
    <tr>
      <td scope="row">{item.id}</td>
      <td>{item.name}</td>
      <td>{item.checked ? "true" : "false"}</td>
      <td>
        <Button onClick={() => handle_del(item.id)}>Delete</Button>
      </td>
    </tr>
  );
}
