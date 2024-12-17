document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch("/personal");
  const data = await response.json();
  console.log(data[0].sharof);
});
