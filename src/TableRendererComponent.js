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
              const cellValue = row[headerItem.label.replace(/ /g, '').toLowerCase()];
              switch (headerItem.type) {
                case "text":
                  return <td key={colIndex}>{cellValue}</td>;
                case "input":
                  return (
                    <td key={colIndex}>
                      <input type="text" value={cellValue} readOnly />
                    </td>
                  );
                case "dropdown":
                  return (
                    <td key={colIndex}>
                      <select value={cellValue} disabled>
                        {headerItem.options.map((option, optIndex) => (
                          <option key={optIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                  );
                case "dateTime":
                  return <td key={colIndex}>{cellValue}</td>;
                case "textblock":
                  return <td key={colIndex}><textarea value={cellValue} readOnly /></td>;
                default:
                  return null;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableRendererComponent;
