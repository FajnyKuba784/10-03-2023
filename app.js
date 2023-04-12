var wybor = 0
var json 
var jsonb
var k1 = 0
var k2 = 0
var k3 = 0


async function buttons(){

    const nazwa = await fetch("http://localhost:3000/select/kandydat")
    
    jsonb = await nazwa.json()
    
    for(var i=0;i<=jsonb.length-1;i++){
        const button = document.createElement("button")
        
        button.setAttribute("id","button"+jsonb[i].id_kandydata)
        button.setAttribute("class","b")
        button.setAttribute("onclick",`wysylanie(${jsonb[i].id_kandydata})`)
        button.innerHTML = jsonb[i].nazwa
        document.getElementById("div2").appendChild(button)
        console.log("koniec")
    }


}
buttons()

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
function wysylanie(i){

    const pesel = document.getElementById("pesel").value
    const kandydat = document.getElementById("button"+i).innerHTML

    

    const data = fetch("http://localhost:3000/add/"+kandydat+"/"+pesel)

    document.getElementById("div2").innerHTML = "<h1>Dziękujemy za oddanie głosu</h1>"
}
function wysylanie1(){

    const pesel = document.getElementById("pesel").value
    const kandydat = document.getElementById("button1").innerHTML

    

    const data = fetch("http://localhost:3000/add/"+kandydat+"/"+pesel)

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

