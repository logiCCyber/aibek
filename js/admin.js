document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch("/personal");
  const data = await response.json();
  const obj = employees.map(item => {
    let totalHours = item.workDays.reduce((acc, hoursDay) => acc + hoursDay.totalHours, 0);
    let totalSalary = item.workDays.reduce((acc, hoursDay) => acc + hoursDay.totalDailySalary, 0);
    return { name: item.name, position: item.position, salary: item.salaryPerHour, totalHours: totalHours,  totalSalary: totalSalary };
  });

  console.log(obj);
});
