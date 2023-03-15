var wybor = 0
var json 
var k1 = 0
var k2 = 0
var k3 = 0




async function getData(){

    const data = await fetch("http://localhost:3000/select")

    json = await data.json()

    for(var i=0;i<=json.length-1;i++){

        if(json[i].kandytat==1)k1++
        else if(json[i].kandytat==2)k2++
        else if(json[i].kandytat==3)k3++
    }
    console.log(k1,k2,k3)

    
}
getData()

function wysylanie1(){

    const pesel = document.getElementById("pesel").value

    const data = fetch("http://localhost:3000/add/Obama1/"+pesel)

    document.getElementById("div2").innerHTML = "<h1>Dziękujemy za oddanie głosu</h1>"
}
function wysylanie2(){

    const pesel = document.getElementById("pesel").value

    const data = fetch("http://localhost:3000/add/Obama2/"+pesel)

    document.getElementById("div2").innerHTML = "<h1>Dziękujemy za oddanie głosu</h1>"
}
function wysylanie3(){

    const pesel = document.getElementById("pesel").value

    const data = fetch("http://localhost:3000/add/Obama3/"+pesel)

    document.getElementById("div2").innerHTML = "<h1>Dziękujemy za oddanie głosu</h1>"
}

