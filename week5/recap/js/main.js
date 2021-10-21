(() => {
  // Data: lineup
  const lineup = [
    {
      'thumbnailUrl': 'https://assets.rockwerchter.be/files/cache/medium/files/fnm-1500-60cc6b19a9efc.jpg',
      'bandName': 'Faith No More',
      'playDay': 'Zaterdag'
    },
    {
      'thumbnailUrl': 'https://assets.rockwerchter.be/files/cache/medium/files/fnm-1500-60cc6b19a9efc.jpg',
      'bandName': 'Faith No More',
      'playDay': 'Zaterdag'
    }
  ];
  // Define the application
  const app = {
    init() {
      console.log('1. Application initialized!');
      // Call the function cacheElements
      this.cacheElements();
    },
    cacheElements() {
      console.log('2. Cache elements!');
      // Get the node or element via querySelector with certain selectors
      this.lineupElement = document.querySelector('.lineup');
      console.log(this.lineupElement);
      // Read the lineup data, convert it to an html string and inject it to the lineupElement via the property innerHTML
      // this.lineupElement.innerHTML = lineup.map((concert) => `
      // <div class="concert">
      //   <h2>${concert.bandName}</h2>
      // </div>
      // `).join('');
      let outputStr = '';
      for (let concert of lineup) {
        outputStr += `
        <div class="concert">
           <h2>${concert.bandName}</h2>
        </div>
        `;
      }
      this.lineupElement.innerHTML = outputStr;
    }
  };
  // Call the init function (method) from the app object
  app.init();
})();