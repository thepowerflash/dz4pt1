// const peoples = [
//     {
//         name: 'John',
//         age: 30
        
//     },
//     {
//         name: 'John',
//         age: 30
//     },
//     {
//         name: 'John',
//         age: 30
//     },
//     {
//         name: 'John',
//         age: 30
//     },
// ]

// const peoplesBlock = document.querySelector('.peoples')

// peoples.forEach(person => {
//     const personCard = document.createElement('div')
//     personCard.classList.add('card')
//     personCard.innerHTML = `
//         <img src="${person.images} alt="">
//         <h3>${person.name}</h3>
//         <span>Age: ${person.age}</span>
//     `
//     peoplesBlock.append(personCard)
// })




const peoplesBlock = document.querySelector('.peoples');


const request = new XMLHttpRequest();
request.open('GET', 'data.json');
request.setRequestHeader('Content-Type', 'application/json');
request.send();

request.addEventListener('load', () => {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);

    
    data.forEach(person => {
      const personCard = document.createElement('div');
      personCard.classList.add('card');
      personCard.innerHTML = `
        <img src="${person.image}" alt="">
        <h3>${person.name}</h3>
        <span>Age: ${person.age}</span>
        <span>record: ${person.record}</span>
      `;
      peoplesBlock.append(personCard);
    });
  } 
});
