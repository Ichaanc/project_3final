
// USE ENTER KEY TO ENTER

let names = document.querySelector("#pokemonName");
names.addEventListener('keypress',(e)=> {
  if(e.key === "Enter"){
    getPokemon(e);
  }
})

// USE ENTER KEY TO ENTER END


// ON CLICK TO SEARCH POKEMON

document.querySelector("#search").addEventListener("click", getPokemon);


// ON CLICK TO SEARCH POKEMON



// CREAT A FUNCTION TO UPPERCASE
function capitalize(string) {
  return string.toUpperCase()
}




// CREAT A FUNCTION TO LOWERCASE
function lowerCaseName(string) {
  return string.toLowerCase();
}


// CREATE A FUNCTION TO FETCH API IN BUTTON

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML += `
    
      <div class="row border border-warning border-5 rounded mb-3" id="card-${data.types[0].type.name}">
  <a class="btn remove text-end bg-transparent border-transparent">❌</a>

  <!-- section 1  -->
  <div class="col-12 col-md-4 col-lg-4 text-white text-center">
    <img src="${data.sprites.other["home"].front_default}" class="img-fluid "
    id="movePokemon"
    alt="Pokemon name" />
    <h1 class="text-center text-uppercase  fw-bolder  border-1 fs-2" id="namee">
    ${capitalize(data.name)}</h1>


    <a 
    href="https://pokemondb.net/pokedex/${(data.name)}" 
    target="_blank" 
    class="btn text-center buttonHover  border border-light border-1 shadow-lg mt-2"  
    id="${data.types[0].type.name}">
    NAME
</a>


  </div>

  <!-- section 1 END -->

  <!-- section 2  -->

  <div class="col-6 col-md-4 col-lg-4 text-center text-white">
    <h2 class="text-center">Version</h2>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <img style="width:200px"
            class="img-fluid "
            src="${data.sprites.other["dream_world"].front_default}" alt="">
          </div>
          <div class="col-6 d-flex align-items-center">
            <img style="width:200px"
            class="img-fluid "
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="">



          </div>
        </div>

        <div class="row mb-2">
          <div class="col-6 d-flex align-items-center">
            <span> Dream World</span>
          </div>
          <div class="col-6 d-flex align-items-center">
            <span>Official</span>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="row ">
      <div class="col-12">

        
        <img src="typelogo/${data.types[0].type.name}.png"
        style="width:100px" 
        class="border border-light border-1 rounded-circle shadow-lg"
        alt="">
       

     <div class="mb-2 mt-4">
        <a 
        href="https://pokemondb.net/type/${data.types[0].type.name}" 
        target="_blank" 
        class="btn text-center buttonHover  border border-light border-1 shadow-lg mt-2"  
        id="${data.types[0].type.name}">
        ${capitalize(data.types[0].type.name)}
    </a>
    </div>


      </div>
    </div>
  </div>

  <!-- section 2 END -->

  <div class="col-6 col-md-4 col-lg-4 text-center text-white ">
    
<br>


  <div class="bg-secondary opacity-75 border rounded">
    <p class="fw-bold text-center mt-3 pb-1">INFORMATION</p>
    <div class="row">
      <div class="col-6">
        <dt>Height</dt>
        <dd>• ${Math.round(data.height / 3.048)} ft</dd>
      </div>
      <div class="col-6">
        <dt>Weight</dt>
        <dd>• ${(data.weight / 10)} kg</dd>
      </div>
    </div>

    <p class="fw-bold text-center">ABILITIES</p>
    <div class="row">
      <div class="col-6">
        <dt>First Skill</dt>
        <dd>• ${data.abilities[0].ability.name}</dd>
      </div>
      <div class="col-6">
        <dt>Second Skill</dt>
        <dd>• ${data.abilities[1].ability.name}</dd>
      </div>
    </div>
    </div>


    <hr />

    <div class="row text-center bg-secondary opacity-75 border rounded">
      <p class="fw-bold text-center mt-3">STATUS</p>

      <div class="col-4">
        <dt>HP</dt>
        <dd>• ${data.stats[0].base_stat}</dd>
        <br />
        <br />
        <dt>Speed</dt>
        <dd>• ${data.stats[5].base_stat}</dd>
      </div>

      <div class="col-4">
        <dt>Attack</dt>
        <dd>• ${data.stats[1].base_stat}</dd>
        <br />
        <br />
        <dt>Speed.Atk</dt>
        <dd>• ${data.stats[3].base_stat}</dd>
      </div>

      <div class="col-4">
        <dt>Defense</dt>
        <dd>• ${data.stats[2].base_stat}</dd>
        <br />
        <br />
        <dt>Speed.Def</dt>
        <dd>• ${data.stats[4].base_stat}</dd>
      </div>
    </div>
    <hr />
  </div>

</div>
`;

      document.querySelector("#pokemonName").value ="";
    
      const removeButtons = document.querySelectorAll(".remove");
      removeButtons.forEach((remove)=> {
      remove.addEventListener("click", (event)=> {
      event.target.parentElement.remove();
      swal({
        title: "POKEMON REMOVE",
        text: "Search info deleted",
        icon: "success",
        button: "Okay",
      });
      });
      });

    document.querySelector("#search").scrollIntoView(false);


    })
    .catch((err) => {
  
      swal({
        title: "🚫UNKNOWN🚫",
        text: "Pokemon Not Found‼️",
        icon: "error",
        button: "Try Again!",
      });
      document.querySelector("#pokemonName").value ="";

    });


    document.querySelector("#search").scrollIntoView(false);

  e.preventDefault();
}

