import React from "react";
import "./table.scss";
type TableValues = string | number;

type TableProps = {
  title: string;
  columns: string[];
  values: TableValues[][];
};
const Table = ({ title, columns, values }: TableProps) => {
  return (
    <table className="table">
      <th className="table__header">{title}</th>
      <tr className="table__columns">
        {columns.map((column, i) => (
          <th className="table__column table__cell" key={i}>
            {column}
          </th>
        ))}
      </tr>

      {values.map((row, i) => (
        <tr className="table__row" key={i}>
          {row.map((v, i) => (
            <td className="table__cell table__data-cell" key={i}>
              {v}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
