const sectionCards = document.querySelector(".card1 section.cards")

const card = document.querySelector(".card1 div.card")

const infoCards = [
    {
        title: "Um titulo",
        thumb: "Img - Prova Itatech Jr/Skill.png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/Skill (1).png",
        price: "$ 60,00"
    },
    {
        title: "Um titulo",
        thumb: "Img - Prova Itatech Jr/Skill (2).png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_4OHkK555s1A.png",
        price: "$ 60,00"
    },
    {
        title: "Um titulo",
        thumb: "Img - Prova Itatech Jr/Skill (3).png",
        price: "$ 60,00"
    },
    {
        title: "Outro titulo",
        thumb: "Img - Prova Itatech Jr/unsplash_1VV1MRafd7A.png",
        price: "$ 60,00"
    },
]

infoCards.map(infoCard => {
    const cardClone = card.cloneNode(true);
    cardClone.querySelector("img").src = infoCard.thumb;
    console.log(infoCard.thumb)
    cardClone.querySelector(".title").innerHTML = infoCard.title;
    cardClone.querySelector(".price").innerHTML = infoCard.price;
    // cardClone.querySelector(".details").innerHTML = "Ver produto";
    sectionCards.appendChild(cardClone);
});
card.remove()