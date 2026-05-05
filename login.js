let form=document.querySelector('form')
console.log(form)

form.onsubmit=(e)=>{
    e.preventDefault()


    let email=document.querySelectorAll('input')[0].value
    console.log(email)

    let password=document.querySelectorAll('input')[1].value
    console.log(password)

    let storedData=JSON.parse(localStorage.getItem('userDetails'))
    console.log(storedData)

    if(storedData){
        if(email===storedData.email && password===storedData.password){
            alert('login successfull')
            window.location.href="./home.html"
        }
        else
            alert('invalid credentials')
    }
}