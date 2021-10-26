(() => {
  const studentsData = [
    {
      'firstname': 'Evelien',
      'lastname': 'Parent',
      'profilePicture': 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
      'firstname': 'Olivier',
      'lastname': 'Rutsaert',
      'profilePicture': 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
      'firstname': 'Helena',
      'lastname': 'Zarzuela',
      'profilePicture': 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    {
      'firstname': 'Veli',
      'lastname': 'Lugano',
      'profilePicture': 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      'firstname': 'Evelien',
      'lastname': 'Parent',
      'profilePicture': 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
      'firstname': 'Olivier',
      'lastname': 'Rutsaert',
      'profilePicture': 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
      'firstname': 'Helena',
      'lastname': 'Zarzuela',
      'profilePicture': 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    {
      'firstname': 'Veli',
      'lastname': 'Lugano',
      'profilePicture': 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  const app = {
    init () {
      console.log('1. Application initialized!');
      // Cache the elements
      this.cacheElements();
      // Generate the user interface
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Cache DOM elements!');
      // Cache the div element with class value students
      this.$studentsElement = document.querySelector('.students');
      // Cache the div element with class value btn-backgound
      this.$btnBackgroundElement = document.querySelector('.btn-backgound');
      // Add event listener to the previous element
      this.$btnBackgroundElement.addEventListener('click', (ev) => {
        document.body.style.backgroundColor = `hsla(${Math.round(Math.random() * 360)}, 100%, 50%, 1)`;
        document.body.style.transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
      }, false);
    },
    generateUI () {
      console.log('3. Generate UI!');
      // Generate students interface
      this.$studentsElement.innerHTML = studentsData.map((student) => {
        return `
        <div class="student">
          <picture class="picture">
            <img src="${student.profilePicture}">
          </picture>
          <h2 class="name">${student.firstname} ${student.lastname}</h2>
        </div>
        `;
      }).join('');
    }
  };
  app.init();
})();