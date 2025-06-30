
let dogs_data = []


function search(){
    document.getElementById("search-btn").addEventListener("click", () => {
    const search_bar = document.getElementById("search-bar");
    const search_query = search_bar.value.toLowerCase(); 

    const filtered_dogs = dogs_data.filter(dog =>
        dog?.temperament?.toLowerCase().includes(search_query)
    );
    const breeds_cards_container = document.getElementById("breeds-cards");
    breeds_cards_container.innerHTML="";
    show_cards(filtered_dogs);
});
}

function search_bred_for(){
    Array.from(document.getElementsByClassName("row")).forEach((element) => {
        element.addEventListener("click", () => {
            const text = element.innerText.toLowerCase();
            console.log(text)
            
            const filtered_dogs = dogs_data.filter(dog =>
            dog?.bred_for?.toLowerCase().includes(text)
        );
        const breeds_cards_container = document.getElementById("breeds-cards");
        breeds_cards_container.innerHTML="";
        show_cards(filtered_dogs);
        })
    })
}

function search_Temperament(){
    Array.from(document.getElementsByClassName("row")).forEach((element) => {
        element.addEventListener("click", () => {
            const text = element.innerText.toLowerCase();
            console.log(text)
            
            const filtered_dogs = dogs_data.filter(dog =>
            dog?.temperament?.toLowerCase().includes(text)
        );
        const breeds_cards_container = document.getElementById("breeds-cards");
        breeds_cards_container.innerHTML="";
        show_cards(filtered_dogs);
        })
    })

}

function createDogCard(data) {
  const card = document.createElement('div');
  card.className = 'card';

  const imageBox = document.createElement('div');
  imageBox.className = 'dog-image-box';

  const img = document.createElement('img');
  img.src = `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg` || `https://cdn2.thedogapi.com/images/${data.reference_image_id}.png` || 'default.jpg'; // fallback if image is missing
  img.alt = '';
  img.className = 'dog-image';

  imageBox.appendChild(img);
  card.appendChild(imageBox);

  const details = document.createElement('div');
  details.className = 'dog-details';

  const name = document.createElement('h3');
  name.className = 'dog-name';
  name.textContent = data.name;
  details.appendChild(name);

  const ul = document.createElement('ul');

  const properties = [
    { label: 'Weight', value: `${data.weight.imperial} lb, ${data.weight.metric} kg` },
    { label: 'Height', value: `${data.height.imperial} inches, ${data.height.metric} centimeters` },
    { label: 'Bred For', value: data.bred_for },
    { label: 'Breed Group', value: data.breed_group },
    { label: 'Life span', value: data.life_span },
    { label: 'Temperament', value: data.temperament },
    { label: 'Origin', value: data.origin },
  ];

  properties.forEach(prop => {
    const li = document.createElement('li');
    li.className = 'dog-property';
    li.innerHTML = `${prop.label}: <span class="strong">${prop.value || 'N/A'}</span>`;
    ul.appendChild(li);
  });

  details.appendChild(ul);
  card.appendChild(details);

  return card;
}

function show_cards(breeds) {
  const breeds_cards_container = document.getElementById("breeds-cards");
  for (const dog_breed of breeds) {
    let card = createDogCard(dog_breed);
    breeds_cards_container.appendChild(card);
  }
}

async function fetch_data() {
  const response = await fetch("https://api.thedogapi.com/v1/breeds");
  const data = await response.json();
  dogs_data = data
  show_cards(data);
  console.log(data);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch_data();
});




// export default cards;