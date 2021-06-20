import React from "react";
import style from "../../styles/list.module.scss";

const ListBox = ({ name, type, unit, value }) => {
  return (
    <tr className={style.list_box_wrapper}>
      <td>{name}</td>
      <td>{type}</td>
      <td>{unit}</td>
      <td>{value}</td>
    </tr>
  );
};

export default React.memo(ListBox);
