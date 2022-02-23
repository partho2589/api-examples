
const loadbuddy = () => {
    fetch ('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}
loadbuddy()

const displayBuddy = data =>{
    const buddyes = data.results;
    const buddeContaner = document.getElementById('buddys')
    for( const buddy of buddyes){
         const p = document.createElement('p')
         p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`
         buddeContaner.appendChild(p)
    }
}