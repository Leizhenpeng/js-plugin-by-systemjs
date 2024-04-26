document.getElementById('loadHello').addEventListener('click', () => {
    System.import('plugin-hello').then(module => {
      module.greet();
    });
  });
  
  document.getElementById('loadGoodbye').addEventListener('click', () => {
    System.import('plugin-goodbye').then(module => {
      module.farewell();
    });
  });
