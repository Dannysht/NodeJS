
function changeDays(daysUntil)
{
    const days = document.getElementById("days")
    days.innerText = daysUntil
}

function calcDays()
{
    const date = document.getElementById("inputDate")
    fetch("/", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:
        {
            date:date
        }
    }).then(response => response.json())
    .then(result => changeDays(result.days))
}