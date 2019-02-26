//Getting the list of currencies
function getCurrency(){
    currency = document.getElementById("fromCurrencyList").value;
    return currency;
}

//Calculate INR for corresponding countries currency
function calculate(){

    //Get the type of currency
    currency = getCurrency();

    //Get input value
    getInput = document.getElementById("fromInput").value;

    //if input is empty the result should also be empty
    if(getInput == ""){
        document.getElementById("result").value = "";
    }

    //else check the type of currency and calculate corresponding value in Indian Rupee
    else{
        switch(currency){
            case "USD":
                document.getElementById("result").value = getInput *70.85;
            break;

            case "EUR":
                document.getElementById("result").value = getInput * 80.39;
            break;

            case "JPY":
                document.getElementById("result").value = getInput * 0.64;
            break;
        }
    }
}