// available icon function
function availAbleCoin(id) {
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


// Call History Update 
function updateCallHistory(title, number) {
    const time = getTime();

    const newCard = document.createElement('div');
    newCard.className = "flex justify-between items-center bg-[#FAFAFA] p-1 rounded-lg mb-5";

    newCard.innerHTML = `
                        <div>
                            <h1 class="font-bold text-lg">${title}</h1>
                            <p  class="text-[16px]">${number}</p>
                        </div>
                        <div>
                            <p class="text-[16px]">${time}</p>
                        </div>
            `;

    const historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(newCard);
}