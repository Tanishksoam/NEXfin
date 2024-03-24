import React from "react";

class VariableWidthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || [],
      columns: props.columns || [],
    };
  }

  render() {
    const { data, columns } = this.state;

    return (
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{
                  width: `${column.width}px`,
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    width: `${column.width}px`,
                    border: "1px solid black",
                    padding: "8px",
                  }}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default VariableWidthTable;
