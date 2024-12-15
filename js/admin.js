document.addEventListener('DOMContentLoaded', async function() {
  const response = await fetch("/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = response.json();
  console.log(data);
  
});
