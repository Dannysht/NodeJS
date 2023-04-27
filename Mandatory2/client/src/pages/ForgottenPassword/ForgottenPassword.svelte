<script>
    import toastr from "toastr";
    import 'toastr/build/toastr.min.css';

    let email;

    function forgotPass(event){
        event.preventDefault()
        fetch("http://localhost:8080/forgotPass", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(response => {
            if (response.status === 200){
                toastr["success"]("Password sent!");

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
                
            } else if (response.status === 500){
                toastr["error"]("Could not send email. Try again.");

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
        <label>Email address</label>
        <input type="email" bind:value={email}>
        <br>
        <br>
        <button on:click={forgotPass} id="button">Send me my password!</button>
    </form>
</div>