export const tableData = {
    header: [
      { label: "First Name", type: "text" },
      { label: "Last Name", type: "text" },
      { label: "Blood Types", type: "dropdown", options: ["A", "B", "AB", "O"] },
      { label: "Medicare Number", type: "input" },
      { label: "DOB", type: "dateTime", format: "dd/MM/YYYY" },
      { label: "Admission reason", type: "dropdown", options: ["Routine Check", "Emergency", "Follow-up"] },
      { label: "Admission time", type: "dateTime", format: "dd/MM/YYYY HH:mm" },
      { label: "Note", type: "text" }
    ],
    rows: [
        { 
            "First Name": "John", 
            "Last Name": "Doe", 
            "Blood Types": "A", 
            "Medicare Number": "123456789", 
            "DOB": "01/01/1995", 
            "Admission reason": "Routine Check", 
            "Admission time": "03/07/2024 10:15", 
            "Note": "N/A" 
          },
          { 
            "First Name": "Jane", 
            "Last Name": "Smith", 
            "Blood Types": "B", 
            "Medicare Number": "987654321", 
            "DOB": "05/12/1989", 
            "Admission reason": "Emergency", 
            "Admission time": "03/07/2024 11:30", 
            "Note": "Requires follow-up" 
          }
    ]
  };
  