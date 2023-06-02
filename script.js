let user = []
function renderUser(){
    let userContainer=document.getElementById('user')
    userContainer.innerHTML=''
    user.map((users)=>{
        let div = document.createElement('div');
        let userName=document.createElement('p');
        let userEmail=document.createElement('p');
        div.classList.add('users');

        userName.innerText=users.name;
        userEmail.innerText=users.email

        userContainer.appendChild(div);
        div.appendChild(userName);
        div.appendChild(userEmail)
    })
    function successAlert(){
        let alert=document.getElementById('alert')
        alert.classList.add(success)
        alert.innerText=('user added succesfully')
        setTimeout(()=>{
            alert.classList.remove('success');
            alert.innerText=''
        },2000)
    }
}
function register() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let tempUser = {
        name: name.value,
        email: email.value,
    }
    let userEmailCount=user.filter((users)=>{
        return users.email==email.value;
    })
    if(userEmailCount.length == 0){
    user.push(tempUser)
}
    else{
        alert("Email Already Exist")
    }
    renderUser()
    console.log(user)
}
