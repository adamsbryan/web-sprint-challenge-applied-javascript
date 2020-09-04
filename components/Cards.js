// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response =>{
    const responseData = response.data.articles;
    const javascript = responseData.javascript;
    const bootstrap = responseData.bootstrap;
    const technology = responseData.technology;
    const jquery = responseData.jquery;
    const node = responseData.node;

    //iterating through each of the arrays to pull out the articles
    javascript.forEach(element =>{
        const articleCard = cardMaker(element);
        cardContainer.appendChild(articleCard);
    })
    bootstrap.forEach(element =>{
        const articleCard = cardMaker(element);
        cardContainer.appendChild(articleCard);
    })
    technology.forEach(element =>{
        const articleCard = cardMaker(element);
        cardContainer.appendChild(articleCard);
    })
    jquery.forEach(element =>{
        const articleCard = cardMaker(element);
        cardContainer.appendChild(articleCard);
    })
    node.forEach(element =>{
        const articleCard = cardMaker(element);
        cardContainer.appendChild(articleCard);
    })
})
.catch(err => {
    console.log('Somethings not right here:' + err)
  });

const cardContainer = document.querySelector('.cards-container');

function cardMaker(articleDataObj) 
{
    //grabbing data from api
    const articleHeadline = articleDataObj.headline;
    const articleAuthor = articleDataObj.authorName;
    const authorPhoto = articleDataObj.authorPhoto;

    //creating card elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    //adding classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    //appending elements to card div
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(authorImg);
    authorDiv.appendChild(authorName);

    //adding content to the fields
    headlineDiv.textContent = articleHeadline;
    authorName.textContent = articleAuthor;
    authorImg.src = authorPhoto;

    //event listner to print headline to console when clicked
    headlineDiv.addEventListener('click', evnt => {
        console.log(event.target.textContent);
    })

    return cardDiv
}
