let charactersData
const getCharacters = async () => {
   await fetch(`https://rickandmortyapi.com/api/character/`)
       .then((res) => res.json())
       .then(({ results }) => {charactersData = results });     
        console.log(charactersData)
        createCards(charactersData)

}

const createCards = (data) => {
     data.forEach((character) => {
        const div = document.createElement("div");
        div.setAttribute("class", "card")

        const image = document.createElement("img");
        image.setAttribute("src", character.image)
        div.appendChild(image)
        
        const container =  document.createElement("div");
        container.setAttribute("class", "container")
        

        const name = document.createElement("h4");
        name.innerHTML = character.name
        container.appendChild(name)


        const species = document.createElement("p");
        species.innerHTML = character.species
        container.appendChild(species)


        div.appendChild(container)


        document.getElementById("section-characters").appendChild(div);
         
    })
}
//converter code in first on first line

getCharacters();
