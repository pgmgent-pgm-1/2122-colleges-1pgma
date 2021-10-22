(() => {
  const words = [
    'html',
    'css',
    'javascript',
    'react',
    'front-end development'
  ];

  const app = {
    init() {
      console.log('1. Application Initialized!');
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Cache Document Object Model elements!');
      // Get the element with classname waves
      this.wavesElement = document.querySelector('.waves');
      console.log(this.wavesElement);
      // Get the element with the classname tag-cloud
      this.tagCloudElement = document.querySelector('.tag-cloud');
      console.log(this.tagCloudElement);
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      // Generate a set of wave elements within the waves element
      let outputStr = '', angle = 0, saturation = 0, w = 0;
      for (let i=0; i < 200; i++) {
        angle = Math.round((360 / 200) * i);
        saturation = Math.round(Math.random() * 100);
        w = Math.round(Math.random() * 100);
        outputStr += `
        <div class="wave" style="width: ${w}px;height: ${w}px;background: hsla(${angle}, ${saturation}%, 50%, 1);transform: rotate(${angle}deg);">
        </div>
        `;
      }
      this.wavesElement.innerHTML = outputStr;

      // Generate a set of tag elements with the tag-cloud element
      this.tagCloudElement.innerHTML = words.map((tag) => `<div class="tag" style="font-size: ${2 + tag.length / 6}rem; transform: translateX(${tag.length * 10}px)">${tag}</div>`).join('');
    }
  };
  app.init();
})();