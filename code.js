
let Minutes= document.querySelector("[name='Minutes']")
let calculate= document.querySelector("[data-calculate]")
let calcbtn= document.querySelector("#calcbtn")


function results() {
   let idk = (Minutes.value * 60)
    calculate.value=idk

}

calcbtn.addEventListener("click", results)

