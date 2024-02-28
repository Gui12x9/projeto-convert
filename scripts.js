const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySele = document.querySelector(".currency-select-2")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToconvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")


    console.log(currencySelect.value)
    const realToday = 1.00
    const DolarToday = 4.97
    const euroToday = 5.35
    const libraToday = 6.26
    const bitcoinToday = 258.74456
    const rupiaToday = 0.60

    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "rupia") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaToday)
    }

    if (currencySelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "dolar") {
        currencyValueToconvert.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
}

function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Design sem nome 3.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1 (1).png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    if (currencySelect.value == "rupia") {
        currencyName.innerHTML = "Rupia indiana"
        currencyImage.src = "https://wise.com/web-art/assets/flags/inr.svg"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()
}






function converteValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const  currencyValuetoConver = document.getElementById("currency-valor")
    const currencValue = document.getElementById("currency-value-2")

    console.log(currencySele.value)
    const realToday = 1.00
    const DolarToday = 4.97
    const euroToday = 5.35
    const libraToday = 6.26
    const bitcoinToday = 258.74456
    const rupiaToday = 0.60
    
    if (currencySele.value == "real") {
        currencValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday )
    }
    if (currencySele.value == "dolar") {
        currencValue.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue  * DolarToday)
    }

    if (currencySele.value == "euro") {
        currencValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySele.value == "libra") {
        currencValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySele.value == "bitcoin") {
        currencValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToday )
    }

    if (currencySele.value == "rupia") {
        currencValue.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue * rupiaToday)
    }
    if (currencySelect.value == "real") {
        currencyValuetoConver.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
}

function changcurrency() {
    const currencyNam = document.getElementById("currency-nam")
    const currencyImg = document.querySelector(".currency-img-2")

    
    if (currencySele.value == "dolar") {
        currencyNam.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }
    if (currencySele.value == "real") {
        currencyNam.innerHTML = "Real"
        currencyImg.src = "./assets/brasil 2.png"
    }
    
    if (currencySele.value == "euro") {
        currencyNam.innerHTML = "Euro"
        currencyImg.src = "./assets/Design sem nome 3.png"
    }

    if (currencySele.value == "libra") {
        currencyNam.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1 (1).png"
    }

    if (currencySele.value == "bitcoin") {
        currencyNam.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    if (currencySele.value == "rupia") {
        currencyNam.innerHTML = "Rupia indiana"
        currencyImg.src = "https://wise.com/web-art/assets/flags/inr.svg"
    }


    converteValue()
}

currencySele.addEventListener("change", changcurrency)

currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues)

