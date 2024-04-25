System.import('plugin-hello').then(module => {
    document.getElementById('loadHello').addEventListener('click', () => {
      module.greet();
    });
  });
  
  System.import('plugin-goodbye').then(module => {
    document.getElementById('loadGoodbye').addEventListener('click', () => {
      module.farewell();
    });
  });
  