(() => {
  // Data: lineup
  const lineup = [
    {
      'thumbnailUrl': 'https://assets.rockwerchter.be/files/cache/medium/files/fnm-1500-60cc6b19a9efc.jpg',
      'bandName': 'Faith No More',
      'playDay': 'Zaterdag'
    },
    {
      'thumbnailUrl': 'https://assets.rockwerchter.be/files/cache/medium/files/metallica-artiest-60c85d0413a36.jpg',
      'bandName': 'Metallica',
      'playDay': 'Vrijdag'
    },
    {
      'thumbnailUrl': 'https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg',
      'bandName': 'Pearl Jam',
      'playDay': 'Donderdag'
    },
    {
      'thumbnailUrl': 'https://assets.rockwerchter.be/files/cache/medium/files/rhcp-web-61543fbab0b59.jpg',
      'bandName': 'Red Hot Chilly Peppers',
      'playDay': 'Zondag'
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
      this.digitalClockElement = document.querySelector('.digital-clock');
      console.log(this.digitalClockElement);
      // Call the function generateUI
      this.generateUI();
    },
    generateUI() {
      console.log('3. Generate User Interface!')
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
          <h2 class="band">${concert.bandName}</h2>
          <picture class="picture">
            <img src="${concert.thumbnailUrl}">
          </picture>
          <div class="playday">${concert.playDay}</div>
        </div>
        `;
      }
      this.lineupElement.innerHTML = outputStr;
      
      // Generate Digital Clock
      setInterval(() => {
        // Make a new instance of Date object
        const currentDate = new Date();
        this.digitalClockElement.innerHTML = currentDate.toLocaleTimeString();
      }, 500);
    }
  };
  // Call the init function (method) from the app object
  app.init();
})();