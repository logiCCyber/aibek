document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch("/admin");
  const data = response.json();
  console.log(data);
});
