// here we will all the function which is use in html
// so start javascripts code
// fucntion for displaying value
function dis(val){
    document.getElementById("xyz").value+=val
}

// function for solve the vale

function solve(){
    let x = document.getElementById("xyz").value
    let y = eval(x)
    document.getElementById("xyz").value = y
}

function clr(){
    document.getElementById("xyz").value = ""

}


