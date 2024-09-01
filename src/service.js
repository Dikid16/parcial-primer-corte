
class RickAndMortyService {
	constructor() {
        this.url = "https://rickandmortyapi.com/api/character";
    }
    

	async getAllCharacters() {
        try {
            const response = await fetch(this.url);
            const mispersonajes = await response.json();

            let characters = []

            mispersonajes.results.forEach(character => {
                characters.push({
                    "name": character.name,
                    "status": character.status,
                    "species": character.species,
                    "firstSeen": character.origin.name,
                    "location": character.location.name,
                    "image": character.image,
                    "student": "Diego Andres Niño Cardona",
                    "code": "0000220294"
                });   
            });
            
            return characters;
            
        } catch (error) {
            console.log("Error: "+error)           
        }
        
	}
}

export default RickAndMortyService;
