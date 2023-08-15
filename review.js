document.querySelector("#submit-btn").addEventListener("click", function(){
    // console.log("hello vai");
    const textArea = document.getElementById("text-area")
    const areaValue = textArea.value

    const p = document.createElement("p")
    p.innerText = areaValue
    const container = document.querySelector("#review")
    container.appendChild(p)
    textArea.value = "";
})
document.getElementById("text-area").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        const textArea = document.getElementById("text-area")
    const areaValue = textArea.value

    const p = document.createElement("p")
    p.innerText = areaValue
    const container = document.querySelector("#review")
    container.appendChild(p)
    textArea.value = "";
    }
})