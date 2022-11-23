const form = document.getElementById("form");
const textarea = document.getElementById("input");
const msg = document.getElementById("msg");
const post = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})


function formValidation() {

    if(textarea.value === ""){
        msg.innerHTML = "Post can not be empty."
        setTimeout(() => {
            msg.innerHTML = "";
        }, 2000);
    } else{
        acceptData();
        
    }

}

let data = {};

function acceptData() {
    data["post"] = textarea.value;
    showData();
}

function showData() {
    post.innerHTML += 
    `<div>
    <p>${data.post}</p>
    <div class="options">
      <i onclick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick = "deletePost(this)" class="fa-solid fa-trash"></i>
    </div>
    </div>`;
    clearField();

}



function clearField() {
    textarea.value = "";
}

function updatePost(e) {
    textarea.value= e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

};

function deletePost(e) {
    e.parentElement.parentElement.remove();
}



