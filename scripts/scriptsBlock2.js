const sectionCards2 = document.querySelector(".card2 section.cards")

const card2 = document.querySelector(".card2 div.card")

const infoCards2 = [
    {
        title: "Um titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_0POwK6iAiRQ.png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_caNzzoxls8Q.png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_bUgaIaZysH0.png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_fMP-oCze3AY.png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_jMT6BrgBuXU.png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_k-xYhI3-gJM.png",
        price: "$ 60,00"
    },
]

infoCards2.map(infoCard => {
    const cardClone2 = card2.cloneNode(true);
    cardClone2.querySelector("img").src = infoCard.thumb;
    cardClone2.querySelector(".title").innerHTML = infoCard.title;
    cardClone2.querySelector(".price").innerHTML = infoCard.price;
    sectionCards2.appendChild(cardClone2);
});

card2.remove()