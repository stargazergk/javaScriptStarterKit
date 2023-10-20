console.log("Merhaba Goktug!")

let konutKredileri=["Konut","Emlak","Arsa",["x","c"]]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"/<li>")
    
}
console.log("/<ul>")

console.log(konutKredileri[3][1])
