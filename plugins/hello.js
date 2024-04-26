



System.register([], function (_export, _context) {
    return {
        execute: function () {
            _export('greet', function farewell() {
                document.querySelector('h1').textContent = 'Greet from Hello World';
            });
        }
    };
});