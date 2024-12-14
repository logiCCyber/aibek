
document.querySelector("#form_auth").addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value
        })
    }
        const data = response.json();
        console.log(data);
});
