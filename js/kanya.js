
const loadKanye = () => {
    fetch ('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayKanye(data))
}
loadKanye

const displayKanye = (kanye) => {
    const quoteElement = document.getElementById('kanyes');
    quoteElement.innerText = kanye.quote
}