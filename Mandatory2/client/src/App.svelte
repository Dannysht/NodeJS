<script>
  import {Router, Route, Link} from "svelte-navigator"
  import Index from "./pages/Index/Index.svelte"
  import Login from "./pages/Login/Login.svelte"
  import Register from "./pages/Register/Register.svelte"
  import LoggedPage from "./pages/LoggedPage/LoggedPage.svelte";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import { user } from "./store/users.js";
    import ForgottenPassword from "./pages/ForgottenPassword/ForgottenPassword.svelte";

  function logout(){
    $user = null;
    fetch("http://localhost:8080/auth/logout", {
      method: "GET",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            }
    }).then(response => {
      if (response.status === 200){
        window.location.href = "/";
      }
    });
  }

</script>

<Router>
  <nav>
    <Route path = "/">
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
      <Index />
    </Route>
    <Route path = "login">
      <Link to="/">Main page</Link>
      <Login />
    </Route>
    <Route path = "register">
      <Link to="/">Main page</Link>
      <Register />
    </Route>
    <Route path="forgotPass">
      <ForgottenPassword />
    </Route>
    <PrivateRoute path="/loggedIn" let:location>
      <Link to="/" on:click={logout}>Logout</Link>
      <LoggedPage/>
    </PrivateRoute>
  </nav>
</Router>
