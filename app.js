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

function wysylanie1(){

    const data = fetch("http://localhost:3000/")


}