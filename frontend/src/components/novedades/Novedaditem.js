import React from "react";
import "../../styles/HomePage.css";

const NovedadItem = (props) => {
  const { concept, amount, date, type } = props;

  return (
      <tr class="table_row">
        <td className="table_data">{concept}</td>
        <td className="table_data">{amount}</td>
        <td className="table_data">{date}</td>
        <td className="table_data">{type}</td>
      </tr>
  );
};

export default NovedadItem;
