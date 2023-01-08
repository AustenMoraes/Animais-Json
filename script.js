async function fetchAnimais(url) {
  const animaisResponse = await fetch(url);
  const animaisJson = await animaisResponse.json();
  const numerosGrid = document.querySelector('.numeros-grid')

  // Criação da div animal através do createAnimal
  animaisJson.forEach(animal => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal)
  });

  // Contador de incrementos
  const counters = document.querySelectorAll('.numero')
  
  counters.forEach(counter => {
    counter.innerText='0'
  
    const updateCounter = ()=> {
      const target = +counter.getAttribute('data-target')
      const c = +counter.innerText
  
      const increment = target / 400
  
      if(c < target) {
        counter.innerText = `${Math.ceil(c+increment)}`
        setTimeout(updateCounter, 1)
      } else {
        counter.innerHTML = target
      }
    }



    updateCounter()
  })


}

function createAnimal(animal) {
  const div = document.createElement('div')
  div.classList.add('animal')
  div.innerHTML = `<img src="./img/${animal.img}"><h3>${animal.especie}</h3><span class="numero" data-target=${animal.total}></span>`;
  
  return div; 
} 

fetchAnimais('./animaisApi.json')


























// Contador de incrementos

function animateNumber(numberElement) {
  const target = parseInt(numberElement.dataset.target);
  let current = 0;

  setInterval(() => { 
    current += 1;
    numberElement.c = current;

    if (current >= target) {
      clearInterval();
    }
  }, 10);
}
