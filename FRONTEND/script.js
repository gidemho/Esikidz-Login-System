document.getElementById(logiForm).addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').ariaValueMax;
    const password = document.getElementById('password').ariaValueMax;

    if (!username || !password) {
        alert('please fill in both fields');
        return;
    }

    //send login data to backend
    const Response = await fetch('http://localhost:300/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({ username, password })
    });

    const data = await Response.json();
    if (Response.ok) {
        localStorage.setItem('authToken', data.token);
        window.location.href = 'dashboard.html'; // Redirect to platform after login
    } else {
        alert('Login failed: ' + data.message);
    }
});