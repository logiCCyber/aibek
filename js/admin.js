document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch("/personal");
  const employees = await response.json();
  const persons = employees.map(item => {
    let totalHours = item.workDays.reduce((acc, hoursDay) => acc + hoursDay.totalHours, 0);
    let totalSalary = item.workDays.reduce((acc, hoursDay) => acc + hoursDay.totalDailySalary, 0);
    return { name: item.name, position: item.position, salary: item.salaryPerHour, totalHours: totalHours,  totalSalary: totalSalary };
  });

  const table = document.querySelector("#table_person");
  persons.map((person, index) => {
    const element = `<tr><td>${index}</td><td>${person.name}</td><td>${person.position}</td><td>${person.salary}</td><td>${person.totalHours}</td><td>${person.totalSalary}</td></tr>`;
    table.insertAdjacentHTML("beforeend", element);
  });
  
});
