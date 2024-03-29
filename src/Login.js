

function Login() {

  const check =username=>password => fetch("https://securityexpert.onrender.com/", {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(response => response.json())
    .catch(error => console.error(error));  

  return (

    
    <form onSubmit={check}>

      <div class="form-outline mb-4">
        <input name= "username" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">Username</label>
      </div>

      <div class="form-outline mb-4">
        <input name= "password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>

      <button  type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

    </form>

  );
}

export default Login;
