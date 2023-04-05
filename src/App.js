import "./App.css";
import { useState } from "react";

function App() {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();

    // Send POST request to external API with form data
    fetch("https://fa-equm-test-saasfaprod1.fa.ocs.oraclecloud.com/hcmRestApi/resources/11.13.18.05/absences", {
      method: "POST",
      'headers': {
        'Authorization': 'Basic RVlBRE1JTi5IQ006UGFzc3dvcmRAMTIz',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personNumber: employeeNumber,
        absenceType: leaveType,
        absenceReason: reason,
        startDate: startDate,
        endDate: endDate,
        employer: "Omega Healthcare Management Services Private Limited",
        startTime: "08:00",
        endTime: "17:00",
        absenceStatusCd: "SUBMITTED"
        
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Leave Management System</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="employee-number">Employee Number</label>
              </td>
              <td>
                <input
                  type="search"
                  id="employee-number"
                  name="employee-number"
                  value={employeeNumber}
                  onChange={(e) => setEmployeeNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="leave-type">Leave Type</label>
              </td>
              <td>
                <select
                  id="leave-type"
                  name="leave-type"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="sick">Sick Leave</option>
                  <option value="vacation">Casual cum Sick Leave (CL)</option>
                  <option value="personal">Covid Leave</option>
                  <option value="personal">Privilage Leave</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="reason">Reason</label>
              </td>
              <td>
                <textarea
                  id="reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="start-date">Start Date</label>
              </td>
              <td>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </td>
              {/* <p>Formatted Start Date: {new Date(startDate).toISOString().slice(0, 10)}</p> */}
            </tr>
            <tr>
              <td>
                <label htmlFor="end-date">End Date</label>
              </td>
              <td>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}



export default App;
