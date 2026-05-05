let myform=document.querySelector('form')
console.log(myform)

myform.onsubmit=(e)=>{
    e.preventDefault()

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let userData={}
    inputBox.forEach((input)=>{
        userData[input.name]=input.value;
    })
    console.log(userData)

    let jsonobj=JSON.stringify(userData)
    console.log(jsonobj)

    localStorage.setItem('userDetails',jsonobj)
    alert("user registred successfully")
    window.location.href="./login.html"
}