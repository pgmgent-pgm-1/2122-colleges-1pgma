(() => {
  const tags = [
    'html',
    'css',
    'javascript',
    'react',
    'Node.js',
    'Express',
    'MongoDb',
    'MariaDb',
    'Next.js',
    'Nest.js',
    'PHP',
    'Laravel',
    'Webpack',
    'npm',
    'Jest',
    'Vue',
    'Adobe XD'
  ];

  const app = {
    init () {
      console.log('1. Initialized application.');
      this.cacheElements();
      this.registerListeners();
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Cache Elements.');
      this.$tagCloud = document.querySelector('.tag-cloud');
    },
    registerListeners () {
      console.log('2bis. Register Elements.');
      // document.body.addEventListener('mousemove', (ev) => {
      //   document.body.style.backgroundColor = `hsl(${ev.offsetX}, 100%, 50%)`;
      //   document.body.style.transform = `rotate(${ev.offsetY}deg)`;
      // });

      document.body.addEventListener('mousemove', (ev) => {
        // Get dimension of tag-cloud element
        const wH = this.$tagCloud.clientHeight - 200;
        const wW = this.$tagCloud.clientWidth - 200;
        // Get all the tag elements from the tag-cloud
        const $tags = document.querySelectorAll('.tag-cloud .tag');
        $tags.forEach(($tag) => {
          $tag.style.color = `hsl(${ev.offsetY}, 100%, 50%)`;
          $tag.style.transform = `translateX(${Math.round(Math.random() * wW)}px) translateY(${Math.round(Math.random() * wH)}px)`;
        });
      });
    },
    generateUI () {
      console.log('3. Generate User Interface.');
      // Generate UI for tags
      this.$tagCloud.innerHTML = this.getHTMLStringForTags(tags);
    },
    getHTMLStringForTags (tags) {
      const wH = this.$tagCloud.clientHeight - 200;
      const wW = this.$tagCloud.clientWidth - 200;

      return tags.map(tag => {
        return `<div class="tag" style="transform: translateX(${Math.round(Math.random() * wW)}px) translateY(${Math.round(Math.random() * wH)}px); font-size: ${tag.length / 2}rem">${tag}</div>`
      }).join('');
    },
  }
  app.init();
})();