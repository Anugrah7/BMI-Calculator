function calculateBmi(){
    let weightData = document.getElementById("weight").value;
    let heightData = document.getElementById("height").value;

    if(weightData === "" || heightData === ""){
        alert("Please Enter Both Height and Weight");
        return;
    }
    document.getElementById("underWeight").classList.add("hidden");
    document.getElementById("normalWeight").classList.add("hidden");
    document.getElementById("overWeight").classList.add("hidden");

    let result = weightData/(heightData*heightData);
    if(result < 18.5) {
        document.getElementById("underWeight").classList.remove("hidden");
    } else if(result >= 18.5 && result <= 24.9) {
        document.getElementById("normalWeight").classList.remove("hidden");
    } else if(result >= 25 && result <= 29.9) {
        document.getElementById("overWeight").classList.remove("hidden");
    } else {
        // For BMI >= 30 (Obese)
        document.getElementById("overWeight").innerText = "Obesity";
        document.getElementById("overWeight").classList.remove("hidden");
    }
   document.getElementById("result").innerText = result.toFixed(2)
   document.getElementById("resultModal").classList.remove("hidden");

}

function gender(){
    document.getElementById("boy").classList.add("hidden");
    document.getElementById("girl").classList.remove("hidden");
}
function gender2(){
    document.getElementById("boy").classList.remove("hidden");
    document.getElementById("girl").classList.add("hidden");
}