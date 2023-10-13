for (let i = 387; i <= 493; i++){

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML += 
      `<div class="col-12 col-md-6 col-lg-3 mb-3" id="filterPokemon">


            <div 
                class="card border border-3 shadow-lg border-secondary  style="width: 350px" 
                id="card-${data.types[0].type.name}">


                 <div class="card-header shadow-lg  d-flex justify-content-between align-items-center" id="${data.types[0].type.name}"> 

                 <span>
                 <button class="btn btn-transparent text-white display-1 border-white rounded">${data.id}</button>
                 </span>
                 

                 <a 
                       href="https://pokemondb.net/type/${data.types[0].type.name}" 
                       target="_blank" 
                       class="btn text-center buttonHover  border border-light border-1 shadow-lg mt-2"  
                       id="${data.types[0].type.name}">
                       ${capitalize(data.types[0].type.name)}
                   </a>
 
                                  
                   </div>


                          <img
                            class="card-img-top img-fluid"
                            id="movePokemon"
                            src="${data.sprites.other["home"].front_default}"
                            alt="Pokemon name"
                            style="width: 100%"/>


          <div class="card-body mt-5">


            <h4 class="card-title text-white p-3 text-center border rounded-5 ">
                  <p 
                  class="text-uppercase  fw-bolder  border-1 fs-2" 
                  id="namee">
                  ${(data.name)}</p>


                  <a 
                  href="https://pokemondb.net/pokedex/${(data.name)}" 
                  target="_blank" 
                  class="btn text-center buttonHover  border border-light border-1 shadow-lg mt-2"  
                  id="${data.types[0].type.name}">
                  NAME
              </a>



            </h4>

            <div class="card-text bg-secondary opacity-75 border rounded">

            <div class="row mt-2 pb-2 ">
            <div class="col-6">  
                   <p class="text-white fw-bold text-center">INFO</p>
                    <dt class="text-white ms-3">Height</dt>
                    <dd class="text-white ms-3">• ${Math.round(data.height / 3.048)} ft</dd>
                    <dt class="text-white ms-3">Weight</dt>
                    <dd class="text-white ms-3">• ${(data.weight / 10)} kg</dd>
            
            </div>
          
            <div class="col-6">
                    <p class="text-white fw-bold text-center">STATUS</p>
                    <dt class="text-white ms-3">Attack</dt>
                    <dd class="text-white ms-3">• ${data.stats[1].base_stat}</dd>
                    <dt class="text-white ms-3">Defense</dt>
                    <dd class="text-white ms-3">• ${data.stats[2].base_stat}</dd>
                
            </div>
            
        </div>
        
        
        

            </div>
           

        </div>


      </div>


    </div>`;
    }
    )}
    pokemonName.oninput = filterUsers;
    function filterUsers() {
      const DivElement = document.querySelectorAll("#filterPokemon");
      for (let filterPokemon of DivElement) {
        const curretName = filterPokemon.innerText.toLowerCase();
        const searchText = this.value.toLowerCase();
        if (!curretName.includes(searchText))
        filterPokemon.setAttribute('hidden', true);
       
      else
      filterPokemon.removeAttribute('hidden');
     
      }
      }
  
    function capitalize(string) {
      return string.toUpperCase()
    }
    
    function lowerCaseName(string) {
      return string.toLowerCase();
    }
    