var k1 = 0
var k2 = 0
var k3 = 0


async function getDatat(){

    const data = await fetch("http://localhost:3000/select")

    const kandyda = await fetch("http://localhost:3000/select/kandydat")

    json = await data.json()

    jsonk = await kandyda.json()
    
    
    for(var i=0;i<=json.length-1;i++){
        
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        
        td1.innerHTML = json[i].kandydat
        td2.innerHTML = json[i].PESEL
        tr.appendChild(td1)
        tr.appendChild(td2)
        document.getElementById("tabela").appendChild(tr)



        
        /*const div = document.createElement("div")
        const lista = document.getElementById("lista")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        
        div.setAttribute("class","diva")
        lista.appendChild(div)
        h3.innerHTML = ("Głos: "+json[i].kandydat)
        div.appendChild(h3)
        p.innerHTML = ("Pesel: "+json[i].PESEL)
        div.appendChild(p)*/

    }

    var xValues = [];
    var yValues = [];
    
    for(var l=0;l<=jsonk.length-1;l++){
        xValues.push(jsonk[l].nazwa)

        var g = 0

        for(var j=0;j<=json.length-1;j++){

            if(json[j].kandydat==jsonk[l].nazwa)g++

        }
        yValues.push(g)
    }
    var barColors = ["#3D2645","#832161","#991731","#BBA0B2","#A4BFEB"];
    
    
    var myChart = new Chart("myChart",{
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Liczba Głosów"
            }
}
})




lider()

}
getDatat()

function lider(){
    if(k1>k2&&k1>k3){
        
        document.getElementById("lider").innerHTML = "Aktualny lider: Obama1"
    }
    if(k2>k1&&k2>k3){
        
        document.getElementById("lider").innerHTML = "Aktualny lider: Obama2"
    }
    if(k3>k1&&k3>k2){
        
        document.getElementById("lider").innerHTML = "Aktualny lider: Obama3"
    } 
}


async function tworz(){

    const nazwa = document.getElementById("nazwak").value

    const kand = await fetch(`http://localhost:3000/ad/kandydaci/${nazwa}`)


}