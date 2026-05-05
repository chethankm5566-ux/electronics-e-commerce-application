let profile=document.getElementById('profile')
console.log(profile)

let storedData=JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)
let image=storedData.imageUrl
console.log(image)
profile.src=`${image}`

function displayCartItems(){
     let mainContainer=document.getElementById('products')

    console.log(mainContainer)

    let cart=JSON.parse(localStorage.getItem('cart'))
    console.log(cart)

    let total=0

    mainContainer.innerHTML=cart.map((item,index)=>{
        total+=item.productPrice
        return`
        <div class="product-card">
    <img src="${item.productImage}" alt="${item.productName}" srcset="">
    <h2>${item.productName}</h2>
    <p>₹ ${item.productPrice}</p>
    <button onclick="removeItem(${index})">Remove</button>
   
</div>
    
        `}).join("")
    
        document.getElementById('total').innerText=` ₹ ${total} /-`
}
displayCartItems()

function removeItem(id){
    let cart =JSON.parse(localStorage.getItem('cart'))
    let product=cart.find((p)=>p.id===id)

    cart.splice(id,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    displayCartItems()
}
function clearCart(){
    let ans=confirm("Are You Sure?? You are Clearing The Cart.")
    if(ans){
        localStorage.setItem('cart',JSON.stringify([]))
    }

    displayCartItems()
    window.location="./home.html"
}

function checkOut(){
    alert("Thankyou for the Shopping 🛍️")
    localStorage.setItem('cart',JSON.stringify([]))
    displayCartItems()
    window.location="./home.html"
    
}
