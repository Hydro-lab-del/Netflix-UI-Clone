document.querySelector('#login-form').addEventListener('submit',async(e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const res = await fetch("/api/login",{
        method: "POST", // Specify POST method
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    const data = await res.json();
    if(res.ok){
        alert("Login successful!");
        localStorage.setItem("user",JSON.stringify(data));
        window.location.href = "/home"
    }
    else{
        alert(data.console?.error || "Login failed");
    }
});