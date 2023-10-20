
document.addEventListener("DOMContentLoaded", function () {
    const ucidPattern = /^[A-Za-z]+[0-9]{0,3}$/;
    const validUcids = ["lm457", "jlm", "ddr", "aj727", "ap773", ];

    const ucidInput = document.getElementById("ucid");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
    const enteredUcid = ucidInput.value.trim();

    if (!ucidPattern.test(enteredUcid)) {
    window.alert("UCID DOES NOT CONFORM TO VALID FORMAT");
} else if (validUcids.includes(enteredUcid)) {
    window.alert("VALID UCID FORMAT AND UCID FOUND!");
} else {
    window.alert("VALID UCID FORMAT BUT INVALID UCID");
}
});
});