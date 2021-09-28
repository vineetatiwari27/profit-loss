var cp = document.querySelector("#initial");
var stock = document.querySelector("#quan");
var sp = document.querySelector("#curr");
var btnInfo = document.querySelector("#btn");
var info = document.querySelector("#calc");
btnInfo.addEventListener("click", function eventHandler() {
    var costPrice = cp.value;
    var sellingPrice = sp.value;
    var st = stock.value;
    if (costPrice > sellingPrice) {
        var loss = costPrice - sellingPrice;
        var lossTotal = loss * st;
        var losspercent = (lossTotal * 100) / costPrice;
        var absovalue = Math.trunc(losspercent);
        information("The loss is: " + lossTotal + " and percent is: " + absovalue);
    }
    else if (costPrice < sellingPrice) {
        var profit = sellingPrice - costPrice;
        var profitTotal = profit * st;
        var profitPercent = (profitTotal * 100) / costPrice;
        var absvalue = Math.trunc(profitPercent);
        information("The profit is: " + profitTotal + " and percent is: " + absvalue);
    }
    else if (costPrice == sellingPrice) {

        information("NOTHING! OOPS");
    }
    else {
        information("Check your data again!")
    }

})
function information(msg) {
    info.style.display = "block";
    info.innerText = msg;
}