import React from "react";
import style from "../../styles/list.module.scss";

const ListBox = ({ name, type, unit, value }) => {
  return (
    <tr data-testid="list-cells" className={style.list_box_wrapper} key={name}>
      <td>{name}</td>
      <td>{type}</td>
      <td>{unit}</td>
      <td>{value}</td>
    </tr>
  );
};

export default React.memo(ListBox);
