const register = document.getElementById("button")

const registerAction = (event) =>
{
    fetch("http://localhost:8080/register", {
        method: "POST"
    }).then((response) => {
        if(response.status === 200)
    {
        location.href = "/notes"
    }
})
    location.href = "/notes";
    event.preventDefault()
}

register.onclick = registerAction