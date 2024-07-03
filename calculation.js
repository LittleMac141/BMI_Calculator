function calculate() {
    event.preventDefault()
    const error = "Please enter in height or weight";
    var height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    var bmi = (weight / (height ** 2) * 703);
    bmi = bmi.toFixed(2);

    /* console.log(bmi) */
    if (weight === "" || height === "") {
        document.getElementById("results").innerHTML = error;
    }
    else {
        document.getElementById("results").innerHTML = bmi;
    }
}