document.querySelector("#form_auth").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: document.querySelector("#username").value,
                password: document.querySelector("#password").value,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.message || "Login failed");
            return;
        }

        const data = await response.json();
        console.log(data);

        if (!data.status) {
            alert("Login or password incorrect");
            return;
        }

        // Перенаправление в случае успешного логина
        window.location.href = "/admin";
    } catch (error) {
        console.error("An error occurred:", error);
        alert("Something went wrong. Please try again later.");
    }
});
