document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch("/admin");
  const data = await response.json();
  console.log(data);
});
console.log("asdf");
