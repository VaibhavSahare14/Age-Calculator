//Dom selectors
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const button = document.getElementById("button");
const displayAge = document.getElementById("age");

//Functions
button.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(date.value);
    // console.log("WORKING " + date.value, month.value, year.value);

    if (date.value == "" && month.value == "" && year.value == "") {
        displayAge.innerText = "Please input valid data for Date Field, Month Field, Year Field";
    } else if (date.value == "" && month.value == "") {
        displayAge.innerText = "Please input valid data for Date Field, Month Field";
    } else if (month.value == "" && year.value == "") {
        displayAge.innerText = "Please input valid data for Month Field, Year Field";
    } else if (date.value == "" && year.value == "") {
        displayAge.innerText = "Please input valid data for Date Field, Year Field";
    } else if (date.value == "") {
        displayAge.innerText = "Please input valid data for Date Field";
    } else if (month.value == "") {
        displayAge.innerText = "Please input valid data for Month Field";
    } else if (year.value == "") {
        displayAge.innerText = "Please input valid data for Year Field";
    } else {
        let newDate = new Date();
        let currentDate = newDate.getDate();
        let currentMonth = 1 + newDate.getMonth();
        let currentYear = newDate.getFullYear();

        // console.log(currentDate, currentMonth, currentYear);
        // console.log(date.value, month.value, year.value);

        const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (date.value > currentDate) {
            currentDate = currentDate + monthsArray[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }

        if (month.value > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }

        let d = currentDate - date.value;
        let m = currentMonth - month.value;
        let y = currentYear - year.value;

        displayAge.innerText = `Your Age is ${y} years ${m} Months ${d} Days`
    }
})

date.addEventListener("keyup", function () {
    if (date.value.length < 1 || date.value.length > 2) {
        date.value = ""
    }
})
month.addEventListener("keyup", function () {
    if (month.value.length < 1 || month.value.length > 2) {
        month.value = ""
    }
})
year.addEventListener("keyup", function () {
    if (year.value.length > 4) {
        year.value = ""
    }
})