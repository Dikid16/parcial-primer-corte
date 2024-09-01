import RickAndMortyService from './service.js';


const service = new RickAndMortyService();


async function createCharacterList() {
    try {
        const content = await service.getAllCharacters();
        const list = document.querySelector(".character-list");
        let inner = "";

        content.slice(0, 20).forEach(character => {
            inner += createCharacterCard(character);
        });

        list.innerHTML = inner;

        const characterCards = document.querySelectorAll(".character");
        characterCards.forEach(element => {
            addCharacterListeners(element, element.querySelector('span:first-child').textContent);
        });
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}


function createCharacterCard(character) {
    let status = "alive";
    if(character.status=='Dead'){
        status = "dead";
    }else if(character.status=="unknown"){
        status = "unknown";
    }

    const card = `
        <div class="character">
                <img src="${character.image}">
            <div class=character-content>
                <div class="content">
                    <span class="content-name">${character.name}</span>
                    <div class="content-info">
                    <div class="live ${status}">
                        <img src="./assets/live.svg">
                    </div>
                    <span class="content-status">${character.status}</span>
                    </div>
                </div>

                <div class="content">
                    <div class="content-info">
                        <div class="species ${species}">
                            <img src="./assets/race.svg">
                        </div>
                        <span class="content-status">${character.species}</span>
                </div>

                <div class="content">
                    <div class="content-info">
                        <div class="location ${location}">
                            <img src="./assets/planet.svg">
                        </div>
                        <span class="content-status">${character.location}</span>
        </div>
        
        `

    return card;
}



createCharacterList();
