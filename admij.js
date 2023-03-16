var k1 = 0
var k2 = 0
var k3 = 0

async function getDatat(){

    const data = await fetch("http://localhost:3000/select")

    json = await data.json()

    
    
    
    for(var i=0;i<=json.length-1;i++){
        
        const div = document.createElement("div")
        const lista = document.getElementById("lista")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        
        div.setAttribute("class","diva")
        lista.appendChild(div)
        h3.innerHTML = ("Głos: "+json[i].kandydat)
        div.appendChild(h3)
        p.innerHTML = ("Pesel: "+json[i].PESEL)
        div.appendChild(p)

        if(json[i].kandydat=="Obama1") k1++
        if(json[i].kandydat=="Obama2") k2++
        if(json[i].kandydat=="Obama3") k3++
    }
    
    var xValues = ["Obama1","Obama2","Obama3"];
    var yValues = [k1,k2,k3];
    var barColors = ["#3D2645","#832161","#991731"];
    
    
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