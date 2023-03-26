const login = document.getElementById("button")

const loginAction = (event) =>
{
    //location.href = "/notes";
    fetch("http://localhost:8080/", {
        method: "POST"
    }).then((response) => {
        if(response.status === 200)
    {
        location.href = "/notes"
    }
})
    event.preventDefault()
}

login.onclick = loginAction