(() => {
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
    }
  };
  // Call the init function (method) from the app object
  app.init();
})();