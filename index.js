// how to call a function in js

// function upperName (name){
//     console.log(name.toUpperCase());
// }
// function fullName(first, callback){
//     const fullName = first +" " + "Razzak"
//     callback(fullName)
// }
// fullName("Md : Abdur", upperName)
let count = 0;
document.getElementById("plus-btn").addEventListener("click", function(){
    const element = document.getElementById("count")
    count += 1;
    element.innerText = count
})
document.getElementById("minus-btn").addEventListener("click", function(){
    const element = document.getElementById("count")
    count -= 1
    element.innerText = count
})
