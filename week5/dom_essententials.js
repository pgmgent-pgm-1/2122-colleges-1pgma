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
})();