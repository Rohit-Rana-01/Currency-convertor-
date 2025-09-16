const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
const fromcurr = document.getElementById("from-currency");
const tocurr = document.getElementById("to-currency");  
const dropdown = document.querySelectorAll("select");

for (let select of dropdown) {
    for (let currcode in countrylist) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;

        if (select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", e => {
        updateFlag(e.target);
    });
}

const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countrylist[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    if (img) {
        img.src = newsrc;
    }
};

const btn = document.getElementById("convertBtn");
btn.addEventListener("click", e => {
    e.preventDefault();
    let amount = document.getElementById("amount");
    let amountval = amount ? amount.value : "";
    if (amountval === "" || amountval < 1) {
        amount.value = "1";
        amountval = 1;
    }

    // Correct API URL
    const url = `${Base_url}${fromcurr.value.toLowerCase()}.json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
            let total = (rate * amountval).toFixed(2);

            let msg = document.querySelector(".msg");
            if (msg) {
                msg.innerText = `${amountval} ${fromcurr.value} = ${total} ${tocurr.value}`;
            }
        })
        .catch(error => {
            console.error("Error fetching exchange rate:", error);
            let msg = document.querySelector(".msg");
            if (msg) {
                msg.innerText = "Error fetching exchange rate.";
            }
        });
});
