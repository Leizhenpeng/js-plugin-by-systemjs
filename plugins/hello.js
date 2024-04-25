System.register([], function (_export, _context) {
    return {
        execute: function () {
            _export('greet', function farewell() {
                console.log('Hello from the Hello plugin!');
            });
        }
    };
});