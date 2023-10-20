const receptionists = [
    {
        firstName: "Peter",
        lastName: "Parker",
        password: "PeterParker@1967",
        id: "9876",
        email: "ppaker@gmail.com",
    },
    {
        firstName: "John",
        lastName: "Cena",
        password: "JohnCena@1977",
        id: "9877",
        email: "cenaj@gmail.com",
    },
    {
        firstName: "Sharukh",
        lastName: "Khan",
        password: "Badshah@100",
        id: "9878",
        email: "kingkhan@gmail.com",
    },
    {
        firstName: "Akshay",
        lastName: "Kumar",
        password: "KumarAkshay@546",
        id: "9879",
        email: "Khiladi13@gmail.com",
    },
    {
        firstName: "Saif",
        lastName: "Ali",
        password: "Kareena@214",
        id: "9880",
        email: "patodi16@gmail.com",
    },
    {
        firstName: "Salman",
        lastName: "Khan",
        password: "FootpathDear@2015",
        id: "9881",
        email: "blackbuck3@gmail.com",
    },
    {
        firstName: "Sanjay",
        lastName: "Dutt",
        password: "PapaKiProtection@47",
        id: "9882",
        email: "sdutt@gmail.com",
    },
    {
        firstName: "Maura",
        lastName: "Deek",
        password: "MauraDeek@202",
        id: "9883",
        email: "mdeek@gmail.com",
    },
];
function toggleEmailRequiredText() {
    const emailConfirmationCheckbox = document.getElementById("email_confirmation");
    const emailRequiredText = document.querySelector("#email + .required-text");
    if (emailConfirmationCheckbox.checked) {
        emailRequiredText.style.display = "inline";
    } else {
        emailRequiredText.style.display = "none";
    }
}
document.getElementById("email_confirmation").addEventListener("change", toggleEmailRequiredText);
function validate(event) {
    const fieldsToValidate = [
        { id: "first_name", name: "First Name" },
        { id: "last_name", name: "Last Name" },
        { id: "password", name: "Password" },
        { id: "receptionist_id", name: "Receptionist ID" },
        { id: "phone", name: "Phone Number" },
        { id: "email", name: "Email Address" },
    ];
    let errorFound = false;
    for (const field of fieldsToValidate) {
        const inputField = document.getElementById(field.id);

        if (field.id === "password") {

            if (
                inputField.value.length > 16 ||
                !/[A-Z]/.test(inputField.value) ||
                !/[0-9]/.test(inputField.value) ||
                !/[^A-Za-z0-9]/.test(inputField.value)
            ) {
                alert(`${field.name} is invalid. It should contain a maximum of 16 characters and have at least 1 uppercase letter, 1 numeric character, and 1 special character.`);
                inputField.focus();
                errorFound = true;
                event.preventDefault();
                return;
            }
        } else if (field.id === "receptionist_id") {

            if (!/^\d{4}$/.test(inputField.value)) {
                alert(`${field.name} is invalid. It should contain a 4-digit number.`);
                inputField.focus();
                errorFound = true;
                event.preventDefault();
                return;
            }
        } else if (field.id === "phone") {
            if (!/^\d{10}$/.test(inputField.value.replace(/[-\s]/g, '')) || !/[-\s]/.test(inputField.value)) {
                alert(`${field.name} is invalid. It should consist of 10 digits and may be delineated by spaces or dashes.`);
                inputField.focus();
                errorFound = true;
                event.preventDefault();
                return;
            }
        } else if (field.id === "email") {

            const emailConfirmationCheckbox = document.getElementById("email_confirmation");
            if (emailConfirmationCheckbox.checked) {
                if (!/^\S+@\S+\.\S{3,5}$/.test(inputField.value)) {
                    alert(`${field.name} is invalid. It must contain an @ followed by a period and an email domain with 3 to 5 characters.`);
                    inputField.focus();
                    errorFound = true;
                    event.preventDefault();
                    return;
                }
            }
        } else {
            if (inputField.value === "") {
                alert(`${field.name} is missing. Please Enter.`);
                inputField.focus();
                errorFound = true;
                event.preventDefault();
                return;
            }
        }
    }
    if (!errorFound) {
        verify()
    }
}
function verify() {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const password = document.getElementById("password").value;
    const receptionistId = document.getElementById("receptionist_id").value;
    const email = document.getElementById("email").value;

    for (const receptionist of receptionists) {
        if (
            firstName === receptionist.firstName &&
            lastName === receptionist.lastName &&
            password === receptionist.password &&
            receptionistId === receptionist.id &&
            (!email || email === receptionist.email)
        ) {

            alert(`Welcome, ${receptionist.firstName} ${receptionist.lastName}! You have entered the system to ${document.getElementById("transaction_type").value}.`);
            return true;
        }
    }
    alert("Account not found for" + " " + firstName + " " + lastName)

    return false;
}
document.querySelector("form").addEventListener("submit", validate);