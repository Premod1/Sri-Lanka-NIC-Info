document.getElementById("calculateBtn").addEventListener("click", () => {
    const nic = document.getElementById("nicInput").value.trim();
    const output = document.getElementById("output");
  
    if (!/^\d{9}[vV]?$/.test(nic) && !/^\d{12}$/.test(nic)) {
      output.textContent = "Invalid NIC number.";
      return;
    }
  
    let year, dayOfYear;
    if (nic.length === 10) { // Old NIC format
      year = parseInt("19" + nic.substring(0, 2), 10);
      dayOfYear = parseInt(nic.substring(2, 5), 10);
    } else if (nic.length === 12) { // New NIC format
      year = parseInt(nic.substring(0, 4), 10);
      dayOfYear = parseInt(nic.substring(4, 7), 10);
    }
  
    const gender = dayOfYear > 500 ? "Female" : "Male";
    if (dayOfYear > 500) dayOfYear -= 500;
  
    const birthDate = new Date(year, 0, dayOfYear); // Jan 1st + dayOfYear
    const age = new Date().getFullYear() - year;
  
    output.innerHTML = `
      <strong>Age:</strong> ${age}<br>
      <strong>Year of Birth:</strong> ${year}<br>
      <strong>Gender:</strong> ${gender}<br>
      <strong>Date of Birth:</strong> ${birthDate.toDateString()}
    `;
  });
  