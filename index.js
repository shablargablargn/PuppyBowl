const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players";

const state = {
    pups: [],
};


const pupList = document.querySelector("#pupHeads");
//console.log(typeof state.pups.data);

async function getPups() {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json);
    state.pups = json.data.players;
    console.log(state.pups);
}

function renderPups() {
    //console.log(state.pups)
    //console.log(typeof state.pups);
    const pupCards = state.pups.forEach((pup) => {
        const pupLink = document.createElement("div");
        pupLink.innerHTML = `
            <h2>
            <a href="#${pup.id}">
            ${pup.name}
            </a>
            </h2>
            <h3>
            ${pup.breed}
            </h3>
            `;
            pupList.appendChild(pupLink);

        return pupLink;
        
        }).join('');
    pupList.replaceChildren(pupCards);
    
    pupList.addEventListener("click", () => {
        console.log("hello world");

    });


}

async function render() {
    await getPups();
    console.log("getPups completed");
    // CanvasRenderingContext2D();
    renderPups();
}
render();