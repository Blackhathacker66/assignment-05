// available icon function
function availAbleCoin(id){
    const coin = document.getElementById(id).innerText;
    const coinNumber = parseInt(coin)
    if (coinNumber < 20) {
        alert("You don’t have enough coins to continue.");
        return;
    }
    else {
        alert('Call ongoin');
    }
    const upDateAvailableCoin = coinNumber - 20;
    document.getElementById(id).innerText = upDateAvailableCoin;
}
