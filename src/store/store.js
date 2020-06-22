const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: null,
            character: null,
            vehicles: null,
            vehicle: null,
            planets: null,
            planet: null,
            favourites: [],
        },
        actions: {
            getCharacters: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    characters: data
                })
            },
            getCharacter: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    character: data
                })
            },
            getVehicles: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    vehicles: data
                })
            },
            getVehicle: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    vehicle: data
                })
            },
            getPlanets: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    planets: data
                })
            },
            getPlanet: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    planet: data
                })
            },
            addFav: fav => {
                const data = fav
                setStore({
                    favourites: getStore().favourites.concat(data)
                })
            },
            removeFavorite: (element) => {
                setStore({
                    favourites: getStore().favourites.filter(fav => fav !== element)
                })
            },
            
        }
    }
}

export default getState;