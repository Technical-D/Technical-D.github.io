const form = document.querySelector("form")
const pswd = document.querySelector("#floatingPassword")
const cpswd = document.querySelector("#floatingCPassword")
const email = document.querySelector("#email")
const cmsg = document.querySelector(".cmsg")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    pswd_validation()
    if(pswd_validation() & telephone_validation()){
        submit_form();
    }
})

function pswd_validation(){
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if((pswd.value.match(regularExpression))){
        if(pswd.value != cpswd.value){
        cmsg.innerHTML = "Password did not match."
        setTimeout(() => {
            cmsg.innerHTML = "";
        }, 5000);
        return false
    } else{
        return true
    }

    } else{
        cmsg.innerHTML = `<ul>
        <li>A special characters</li>
        <li>A number</li>
        <li>Minimun 8 characters</li>
      </ul>`;
        setTimeout(() => {
            cmsg.innerHTML = "";
        }, 5000);
        return false
    }
}

function submit_form(){
    form.submit();
    form.reset();
}