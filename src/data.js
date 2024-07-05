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
      { firstName: "John", lastName: "Doe", bloodTypes: "A", medicareNumber: "123456789", dob: "01/01/1995", admissionReason: "Routine Check", admissionTime: "03/07/2024 10:15", note: "N/A" },
      { firstName: "Jane", lastName: "Smith", bloodTypes: "B", medicareNumber: "987654321", dob: "05/12/1989", admissionReason: "Emergency", admissionTime: "03/07/2024 11:30", note: "Requires follow-up" }
    ]
  };
  