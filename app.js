function validation(){
  
    let username = document.querySelector("#username-input").value;
    let password = document.querySelector("#password-input").value;
    
    if (username == "warda" && password == "123") {
        window.location.href="https://64833ba3bacf9f195182be01--keen-choux-868867.netlify.app/"
        return true;

      } else {
        alert("Invalid username or password");
        return false;
      }
}