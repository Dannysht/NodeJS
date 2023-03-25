console.log("Thank you for visiting");

/*function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function redirect()
{
    await delay(1000)
    window.location.href = "/visitors"
}
*/
setTimeout(() => {
    window.location.href = "/visitors"
}, 3000)

redirect()