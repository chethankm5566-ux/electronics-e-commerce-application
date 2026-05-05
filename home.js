let profile=document.getElementById('profile')
console.log(profile)

let storedData=JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)
let image=storedData.imageUrl
console.log(image)
profile.src=`${image}`

let products = [

    //  Laptops (8)
    { 
        id: 1, 
        productName: "Dell Inspiron",
        productPrice: 55000, 
        productImage: "https://th.bing.com/th/id/OIP.3tzt8nR3rmhJG86fcehP7QHaFB?w=270&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", 
        category: "Laptop" 
    },
    { 
        id: 2, 
        productName: "HP Pavilion", 
        productPrice: 62000, 
        productImage: "https://tse2.mm.bing.net/th/id/OIP.sh3E6tc1_KjXeYK7EcO6CQHaGS?rs=1&pid=ImgDetMain&o=7&rm=3", 
        category: "Laptop" 
    },
    { 
        id: 3, 
        productName: "Lenovo IdeaPad", 
        productPrice: 50000, 
        productImage: "https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_.jpg", 
        category: "Laptop" 
    },
    { 
        id: 4, 
        productName: "Asus VivoBook", 
        productPrice: 48000, 
        productImage: "https://th.bing.com/th/id/OIP.DqhLby_LQjtBU4z-nRTycAHaFI?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", 
        category: "Laptop" },
    { 
        id: 5, 
        productName: "Acer Aspire 7", 
        productPrice: 53000, 
        productImage: "https://knowsize.com/image/laptop/acer-aspire-7-3707.jpg", 
        category: "Laptop" 
    },
    { 
        id: 6, 
        productName: "MacBook Air M1", 
        productPrice: 90000, 
        productImage: "https://tse4.mm.bing.net/th/id/OIP.mHerR27aYOH3BhYqOWpxdAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", 
        category: "Laptop" 
    },
    { 
        id: 7, 
        productName: "MSI GF63", 
        productPrice: 75000, 
        productImage: "https://m.media-amazon.com/images/I/81GrrCZlpDL._AC_.jpg", 
        category: "Laptop" 
    },
    

    //  Mobiles 
    { 
        id: 8, 
        productName: "iPhone 14", 
        productPrice: 70000, 
        productImage: "https://www.apple.com/euro/iphone/compare/c/screens_alt/images/meta/compare__0kr7oqqwknma_og.png?202502181221", 
        category: "Mobile" 
    },
    { 
        id: 9, 
        productName: "Samsung Galaxy S23", 
        productPrice: 65000, 
        productImage: "https://images.samsung.com/id/smartphones/galaxy-s23/images/galaxy-s23-highlights-kv.jpg", 
        category: "Mobile" 
    },
    { 
        id: 10, 
        productName: "OnePlus 11", 
        productPrice: 60000, 
        productImage: "https://m.media-amazon.com/images/I/61g1pqSjAhL._AC_.jpg", 
        category: "Mobile" 
    },
    { 
        id: 11, 
        productName: "Realme GT", 
        productPrice: 35000, 
        productImage: "https://image01.realme.net/general/20230116/1673856398807.png", 
        category: "Mobile" 
    },
    { 
        id: 12, 
        productName: "Redmi Note 12", 
        productPrice: 20000, 
        productImage: "https://fdn2.gsmarena.com/vv/pics/xiaomi/redmi-note-12-5g-international-0.jpg", 
        category: "Mobile" 
    },
    { 
        id: 13, 
        productName: "Vivo V27", 
        productPrice: 32000, 
        productImage: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677578835691/0dd636fb0f6c2f482ab8c96d1b6050de.png", 
        category: "Mobile" 
    },
    { 
        id: 14, 
        productName: "Oppo Reno 8", 
        productPrice: 30000, 
        productImage: "https://gadgetcentral.co.ke/wp-content/uploads/2022/10/Oppo-Reno-8-4G.jpg", 
        category: "Mobile"
    },
    { 
        id: 15, 
        productName: "Google Pixel 7", 
        productPrice: 75000, 
        productImage: "https://cdn.arstechnica.net/wp-content/uploads/2022/10/3.jpg", 
        category: "Mobile" 
    },

    //  Watches 
    { 
        id: 16, 
        productName: "Apple Watch Series 8", 
        productPrice: 40000, 
        productImage: "https://imboldn.com/wp-content/uploads/2022/09/Apple-Watch-Series-8-main.jpg", 
        category: "Watch" 
    },
    { 
        id: 17, 
        productName: "Samsung Galaxy Watch 5", 
        productPrice: 30000, 
        productImage: "https://www.mobigyaan.com/wp-content/uploads/2021/08/Samsung-Galaxy-Watch4-Series.jpeg",
        category: "Watch" 
    
    },
    { 
        id: 18, 
        productName: "Noise ColorFit Pro", 
        productPrice: 3000, 
        productImage: "https://m.media-amazon.com/images/I/611zUjsF8aL._SL1500_.jpg", 
        category: "Watch" 
    },
    { 
        id: 19,
        productName: "Boat Xtend", 
        productPrice: 2500, 
        productImage: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg", 
        category: "Watch" 
    },
    { 
        id: 20, 
        productName: "Fire-Boltt Ninja", 
        productPrice: 2000, 
        productImage: "https://www.gizmochina.com/wp-content/uploads/2022/02/Fire-Boltt-Ninja-Pro-Max-smartwatch.png", 
        category: "Watch" 
    },
];

function displayProducts(listOfProducts){

    let mainContainer=document.getElementById('products')

    console.log(mainContainer)
    
    if(listOfProducts.length===0)
        mainContainer.innerHTML=`<h2>NO Products Found</h2>`

    mainContainer.innerHTML=listOfProducts.map((product)=>`
    <div class="product-card">
    <img src="${product.productImage}" alt="${product.productName}" srcset="">
    <h2>${product.productName}</h2>
    <p>₹ ${product.productPrice}</p>
    <button onclick="addToCart(${product.id})">Cart</button>
    <button onclick="addToWishList(${product.id})">WhishList</button>
</div>
    `).join("")
}

displayProducts(products)

function searchFilter(){
    let text=document.getElementById('searchbox').value.toLowerCase()
    console.log(text)

    let filterData=products.filter((p)=>p.productName.toLowerCase().includes(text))
    displayProducts(filterData)
}

function searchCategory(cat){
    if(cat==="all")
        displayProducts(products)
    else{
        let filterData=products.filter((p)=>p.category===cat)
        displayProducts(filterData)
    }
}

function addToCart(id){
    let cart=JSON.parse(localStorage.getItem('cart'))||[]
    let product=products.find((p)=>p.id===id)
    cart.push(product)

    localStorage.setItem('cart',JSON.stringify(cart))

    alert(`${product.productName} added to  cart`)
}

function addToWishList(id){
    let wishList=JSON.parse(localStorage.getItem('wishList'))||[]
    let product=products.find((p)=>p.id===id)
    wishList.push(product)

    localStorage.setItem('wishList',JSON.stringify(wishList))

    alert(`${product.productName} added to  WishList`)
}
