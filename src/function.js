function addToCart(productName="Ürüne Ulaşilamdi",
quantity="Girilmedi") {
    console.log(    "Sepete Eklendi : " +
     productName +" "+
     quantity + " Adet")
}

// addToCart("Elma")
// addToCart("Karpuz")
// addToCart("")
addToCart()

let sayHello= ()=>{
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
    
}
sayHello2()

function addToCart2(productName, quantity,unitPrice) {
    
}
let product1 = {productName:"Elma",
                unitPrice:10,
                quantity:5}

function addToCart3(product) {
    console.log("Ürün: "+ product.productName)
    console.log("Adet: "+ product.quantity)
    console.log("Fiyat: "+ product.unitPrice)
    
}

let product2 = {productName:"Elma",
                unitPrice:10,
                quantity:5}
let product3 = {productName:"Elma",
                unitPrice:10,
                quantity:5}
product2 =product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}
let products = [
    {productName:"Elma",
    unitPrice:10,
    quantity:5},
    {productName:"Armut",
    unitPrice:10,
    quantity:5},
    {productName:"Karpuz",
    unitPrice:10,
    quantity:5}
]

addToCart4(products)

//fonksiyonun parametro kısmın (...parameter) yaparsan (rest operatörü)
//sınırsız parametre gönderilebilir
//objeler refans bazlı tutulur birbirlilerine atama yaparken
// adres ataması yaparsın direkt değer atanmaz
//kullandığın bir değişkeni eğer bir fonksiyonda aynı 
//isimle kullanıcaksan fonksiyonun içinde o isimle bir
//atama yoksa globaldeki değerini kullanır eğer varsa
// fonksiyonun içindeki değerini alır


let [icAnadolu,marmara,karadeniz,[icanadolSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"marmara", population:"30M"},
    {name:"karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icanadolSehirleri)

let newProductName, newUnitPrice,
 newQuantity 
 ({productName:newProductName,
     unitPrice:newUnitPrice,
     quantity:newQuantity}
    = {productName:"Elma",
     unitPrice:10,
     quantity:5})

    console.log(newProductName)
    console.log(newQuantity)
    console.log(newUnitPrice)