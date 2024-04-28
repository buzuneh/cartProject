let shopStore = [
    {
        id:"asbjhbdj",
        name:"amsungs23",
        price: 2500,
        disc:"Good condition (Full trade-in value) Device turns on and screen works normally",
        image:"image/amsungs23.png"
    },
    {
        id:"fhhfgjhfj",
        name:"amsungs23",
        price: 2550,
        disc:"Good condition  Device turns on and screen works normally",
        image:"image/iphone.png"
    },
    {
        id:"ryyeujhyr",
        name:"amsungs23",
        price: 20500,
        disc:"Good condition (Full trade-in value) Device turns on and screen works normally",
        image:"image/samsung-altra24.png"
    },
    {
        id:"sdgjkhyu",
        name:"amsungs23",
        price: 2000,
        disc:"Good condition (Full trade-in value) Device turns on and screen works normally",
        image:"image/samsung-s21.png"
    },

    {
        id:"srsttyt",
        name:"amsungs23",
        price: 2000,
        disc:"Good condition (Full trade-in value) Device turns on and screen works normally",
        image:"image/samsung-s21.png"
    }
];
let cartBasket=JSON.parse(localStorage.getItem("add")) || [];

let shopEle = document.querySelector('.shop');
let rendShop = ()=>{
    
   return shopEle.innerHTML= shopStore.map((x)=>{
    let {id,name,image,disc,price}=x;
    let search = cartBasket.find((x)=>x.id === id) || [];
    return ` <div id= product-id-${id} class="item" id=>
    <img class="image" src=${image} alt="">
    <h2>${name} Altra24</h2>
   <p>jdhwaejofwkepfws
    </p>
        <div class="item-foot">
            <div class="price">$${price}</div>
            <div class="amount">
                <div class="minus" onclick=" decrease(${id});"><i class="bi bi-dash-lg"></i></div>
                <div id=${id} class="quantity" >${search.item === undefined? 0: search.item}</div>
                <div class="plus" onclick="increase(${id});"><i class="bi bi-plus-lg"></i></div>
            </div>
        </div>
    </div>`;
   }).join("");
}
rendShop();


let increase=(id)=>{
    let selerectItem = id;
    let search = cartBasket.find((x)=> x.id === selerectItem.id);
    if(search === undefined){
    cartBasket.push({
        id:selerectItem.id,
        item: 1
    });
}else{
    search.item += 1;
}
localStorage.setItem("add", JSON.stringify(cartBasket));
//console.log(cartBasket);
update(selerectItem.id);
};

let decrease=(id)=>{

    let selerectItem = id;
    let search = cartBasket.find((x)=> x.id === selerectItem.id);
    if(search === undefined) return;
   else if(search.item === 0) return;

else{
    search.item -= 1;
}
update(selerectItem.id);
cartBasket = cartBasket.filter((x)=>x.item !== 0);
localStorage.setItem("add", JSON.stringify(cartBasket));
update(selerectItem.id);
cartBasket = cartBasket.filter((x)=>x.item !== 0);
//console.log(cartBasket);  

};
let update=(id)=>{
    let search = cartBasket.find((x)=>x.id === id);
    document.getElementById(id).innerHTML= search.item;
    calculate();
};
let calculate=(id)=>{

document.querySelector('.cart-amount').innerHTML = cartBasket.map((x)=> x.item).reduce((x,y) => x+y, 0);
};
calculate();