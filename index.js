function Monate() {
    let monate=document.getElementById("input").value
    console.log(monate)
    document.getElementById("h1").innerHTML=monate


    if (monate=="december") {
        console.log("winter")
        document.getElementById("h1").innerHTML="winter"
    }
}