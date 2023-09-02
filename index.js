const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players";

const state = {
    pups: [],
};

// async function render() {
//     await getPups();
//     // CanvasRenderingContext2D();
// }
// render();

getPups = async()=> {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.pups = json.data;

    console.log(state.pups)
    const pupCards = state.pups.map(pup => {
        const pupLink = document.createElement("link");
        pupLink.innerHTML = `
            <h2>
            <a href="#${pup.id}">
            ${pup.name}
            </a>
            </h2>
            `
    }).join('');
    return pupCards;

}

getPups();

// function renderPups() {
    
// }
//     renderPups();