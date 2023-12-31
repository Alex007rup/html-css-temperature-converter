const celciusInput = document.getElementById("celcius");
const farenheitInput = document.getElementById("farenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("inputs");

for(let i=0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(event) {
        let value = parseFloat(event.target.value);

        switch (event.target.name){
            case "celcius":
                farenheitInput.value = (value *1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "farenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                farenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}