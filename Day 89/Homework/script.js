let cards = [
    { id: 1, title: "Product A", number: 45, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 2, title: "Product B", number: 30, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 3, title: "Product C", number: 80, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 4, title: "Product D", number: 20, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 5, title: "Product E", number: 55, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 6, title: "Product F", number: 10, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 7, title: "Product G", number: 90, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 8, title: "Product H", number: 35, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 9, title: "Product I", number: 70, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" },
    { id: 10, title: "Product J", number: 50, image: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" }
];

let cardContainer = document.getElementById("card-container");

function displayCards(cardsToDisplay) {
    cardContainer.innerHTML = "";
    for (let i = 0; i < cardsToDisplay.length; i++) {
        let card = cardsToDisplay[i];
        let cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = '<img src="' + card.image + '" alt="' + card.title + '" />' +
            '<h2>' + card.title + '</h2>' +
            '<p>Rating: ' + card.number + '</p>';
        cardContainer.appendChild(cardElement);
    }
}

function calculateAverage() {
    let total = 0;
    for (let i = 0; i < cards.length; i++) {
        total += cards[i].number;
    }
    return total / cards.length;
}

function filterBelowAverage() {
    let average = calculateAverage();
    let filteredCards = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].number >= average) {
            filteredCards.push(cards[i]);
        }
    }
    displayCards(filteredCards);
}

function sortAscending() {
    let sortedCards = cards.slice();
    sortedCards.sort(function (a, b) {
        return a.number - b.number;
    });
    displayCards(sortedCards);
}

function sortDescending() {
    let sortedCards = cards.slice();
    sortedCards.sort(function (a, b) {
        return b.number - a.number;
    });
    displayCards(sortedCards);
}

function sortRandomly() {
    let shuffledCards = cards.slice();
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = shuffledCards[i];
        shuffledCards[i] = shuffledCards[j];
        shuffledCards[j] = temp;
    }
    displayCards(shuffledCards);
}

displayCards(cards);