(() => {
  console.log('Hello World');
  const elementShizzle = document.getElementById('shizzle');
  console.log(elementShizzle.innerHTML);
  const allParagraphs = document.getElementsByTagName('p');
  for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs.item(i));
  }
  let allBits = document.getElementsByClassName('bit');
  let j = 0;
  for (let elem of allBits) {
    console.log(allBits.item(j));
    j++;
  }
  allBits = document.querySelectorAll('.bit');
  j = 0;
  for (let elem of allBits) {
    console.log(elem);
    j++;
  }

  const firstBit = document.querySelector('.bit');
  firstBit.innerHTML = '<p>We Like Graphics Love Code Make Cool Stuff</p>';

  const elemArticles = document.getElementsByClassName('articles').item(0);
  const elemsArticle = elemArticles.getElementsByClassName('article');
  j = 0;
  for (let elem of elemsArticle) {
    console.log(elemsArticle.item(j));
    j++;
  }

  const allArticleElements = document.querySelectorAll('.articles .article');
  for (let elem of allArticleElements) {
    elem.innerHTML = '<p>Epsilon</p>'
  }

  // Manipulation
  const lineupElement = document.getElementById('lineup');
  let concertElement = document.createElement('article');
  concertElement.classList.add('concert');
  concertElement.innerHTML = '<h1>Rage Against The Machine</h1>';
  // let hElement = document.createElement('h1');
  // const hElementText = document.createTextNode('Rage Against The Machine');
  // hElement.appendChild(hElementText);
  // concertElement.appendChild(hElement);
  lineupElement.appendChild(concertElement);

  // Less Code
  lineupElement.innerHTML = `
    <article class="concert">
      <h1>Rage Against The Machine</h1>
    </article>
  `;

  // 1. Select the boxes element
  const boxesElement = document.querySelector('.boxes');
  // 2. Temporary String
  let output = '';
  // 3. Loop
  for (let i = 0; i < 100; i++) {
    output += `<div class="box">BOX</div>`;
  }
  // 4. Assign output to element via innerHTML propery
  boxesElement.innerHTML = output;
})();