const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "AC") {
            input.value = "";
        } else if (buttonText === "DEL") {
            input.value = input.value.slice(0, -1);
        } else if (buttonText === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        }else if (buttonText === "=") {
                try {
                    input.value = input.value.replace("%", 100);
                    input.value = eval(input.value);
                } catch {
                    input.value = "Error";
                }

        } else {
            input.value += buttonText;
        }
    });
});