import React from 'react';

// TableRendererComponent: A component to render a table dynamically based on provided data
const TableRendererComponent = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableData.header.map((headerItem, index) => (
            <th key={index}>{headerItem.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableData.header.map((headerItem, colIndex) => {
              let cellValue;
              // Access row data using the exact label from headerItem
              switch (headerItem.type) {
                case "text":
                case "input":
                case "dateTime":
                  cellValue = row[headerItem.label];
                  break;
                case "dropdown":
                  cellValue = row[headerItem.label];
                  break;
                case "textblock":
                  cellValue = row[headerItem.label];
                  break;
                default:
                  cellValue = "";
              }

              // Render cell based on headerItem type
              return (
                <td key={colIndex}>
                  {headerItem.type === "dropdown" ? (
                    <select value={cellValue}>
                      {headerItem.options.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : headerItem.type === "textblock" ? (
                    <textarea value={cellValue} />
                  ) : (
                    cellValue
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableRendererComponent;
