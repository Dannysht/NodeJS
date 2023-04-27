<script>
    import toastr from "toastr";
    import 'toastr/build/toastr.min.css';

    toastr["success"]("You have been successfully logged in!");

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
</script>

<div id="index">
    <h1>Hello, it seems you have managed to login!</h1>
</div>