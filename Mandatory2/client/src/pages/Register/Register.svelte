<script>
    import toastr from "toastr";    
    import 'toastr/build/toastr.min.css';

    let username;
    let password;
    let email;
    let message = "";

    function register(event){
        event.preventDefault()

        fetch("http://localhost:8080/auth/register", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
                'email': email
            })
        })
        .then(response => {
            if (response.status === 200){
                window.location.href = "/login"
            } else if (response.status === 400){
                toastr["error"]("User already exists!");

                toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "500",
                "timeOut": "3000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
                }
            }
            else if (response.status === 403){
                toastr["error"]("Please fill in the fields");

                toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "500",
                "timeOut": "3000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
                }
            }
        });

    }
</script>

<div id="login">
    <form>
        <h2>Register</h2>
        <label>Email address</label>
        <br>
        <input type="email" bind:value={email} required>
        <label>Username</label>
        <br>
        <input type="text" bind:value={username} required>
        <br>    
        <label>Password</label>
        <br>
        <input type="password" bind:value={password} required>
        <br>
        <br>
        <button on:click={register} id="button">Register</button>
        <p>Already have an account? <a href="login">Login here.</a></p>
    </form>
</div>
