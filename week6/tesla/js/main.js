(() => {
  // Describe the data
  const educationData = [
    {
      'name': 'Programming 1: Essentials',
      'learningLine': 'Computer Programming',
      'studyPoints': 6,
      'hoursPerWeek': 10,
      'period': 1,
      'lecturers': [
        {
          'firstName': 'Michael',
          'lastName': 'Vanderpoorten'
        },
        {
          'firstName': 'Philippe',
          'lastName': 'De Pauw - Waterschoot'
        }
      ]
    },
    {
      'name': 'Web Design',
      'learningLine': 'Creative Design & Development',
      'studyPoints': 6,
      'hoursPerWeek': 8,
      'period': 1,
      'lecturers': [
        {
          'firstName': 'Evelien',
          'lastName': 'Rutsaert'
        },
        {
          'firstName': 'Mathieu',
          'lastName': 'Spillebeen'
        }
      ]
    }
  ];

  // Define the application
  const app = {
    init () {
      console.log('1. Application initialized!');
      this.cacheElements();
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Cache DOM elements!');
      // Get the element with class value courses
      this.$courses = document.querySelector('.courses');
    },
    generateUI () {
      console.log('3. Generate User Interface!');
      // Inject HTML string into $courses
      this.$courses.innerHTML = this.generateHTMLForCourses(educationData);
    },
    generateHTMLForCourses (courses) {
      return courses.map((course) => {
        return `<div class="course ${(course.learningLine).replace('& ', '').toLowerCase().replace(/ /g, '_')}">
                  <h2>${course.name}</h2>
                  ${this.generateHTMLForLecturers(course.lecturers)}
                  <footer>
                    <div>${course.studyPoints}<abbr title="studiepunten">sp</abbr></div>
                    <div>${course.hoursPerWeek}<abbr title="uren per week">u/w</abbr></div>
                  </footer>
                </div>`;
      }).join('');
    },
    generateHTMLForLecturers (lecturers) {
      return lecturers.map((lecturer) => {
        return `<div class="lecturer">
                  <h2>${lecturer.firstName} ${lecturer.lastName}</h2>
                </div>`;
      }).join('');
    }
  };
  app.init();
})();