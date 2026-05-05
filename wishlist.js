let profile=document.getElementById('profile')
console.log(profile)

let storedData=JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)
let image=storedData.imageUrl
console.log(image)
profile.src=`${image}`

function displayWishListItems(){
     let mainContainer=document.getElementById('products')

    console.log(mainContainer)

    let wishList=JSON.parse(localStorage.getItem('wishList'))
    console.log(wishList)

     mainContainer.innerHTML=wishList.map((item,index)=>{
    
        return`
        <div class="product-card">
    <img src="${item.productImage}" alt="${item.productName}" srcset="">
    <h2>${item.productName}</h2>
    <p>₹ ${item.productPrice}</p>
    <button onclick="removeItem(${index})">Remove</button>
   
</div>
    
        `}).join("")
    
       

       
}
displayWishListItems()


function removeItem(id){
    let wishList =JSON.parse(localStorage.getItem('wishList'))
    let product=wishList.find((p)=>p.id===id)

    wishList.splice(id,1)
    localStorage.setItem('wishList',JSON.stringify(wishList))
    displayWishListItems()
}
function clearWishList(){
    let ans=confirm("Are You Sure?? You are Clearing The Cart.")
    if(ans){
        localStorage.setItem('wishList',JSON.stringify([]))
    }

    displayWishListItems()
    window.location="./home.html"
}

function checkOut(){
    alert("Thankyou for the Shopping 🛍️")
    localStorage.setItem('wishList',JSON.stringify([]))
    displayWishListItems()
    window.location="./home.html"
    
}
