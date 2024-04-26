  System.register([], function (_export, _context) {
    return {
      execute: function() {

        _export('farewell', function farewell() {
        document.querySelector('h1').textContent = 'Goodbye ~';
        });
      }
    };
    });