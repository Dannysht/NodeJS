<script>
    import toastr from "toastr";
    import 'toastr/build/toastr.min.css';
    import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../../store/users.js";
    const navigate = useNavigate();
	const location = useLocation();

    let username;
    let password;
    let message = "";

    function login(event){
        event.preventDefault()

        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        .then(response => {
            if (response.status === 200){
                user.set({ username, password });
                const from = ($location.state && $location.state.from) || "/loggedIn";
		        navigate(from, { replace: true });
            } else if (response.status === 400){
                toastr["error"]("No user with this password!");

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
        <h2>Login</h2>
        <label>Username</label>
        <br>
        <input type="text" bind:value={username} required>
        <br>    
        <label>Password</label>
        <br>
        <input type="password" bind:value={password} required>
        <br>
        <br>
        <button on:click={login} id="button">Login</button>
        <p>Don't have an account? <a href="register">Register here.</a></p>
        <a href="forgotPass">Forgot password?</a>
    </form>
</div>
