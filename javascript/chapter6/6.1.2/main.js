var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
             return this._year;
        },

        set: function() {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
// 支持该方法的浏览器有IE9+, Firefox 4+, Safari 5+, Opera 12+和Chrome.
