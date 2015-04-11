/////////////////////////////////////////////////
var person = ();
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

alert(person.name); // "Nicholas"
person.name = "Greg";
alert(person.name); // "Nicholas"

/////////////////////////////////////////////////
var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
})

alert(person.name); // "Nicholas"
delete person.name;
alert(person.name); // "Nicholas"

/////////////////////////////////////////////////
var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});

// 抛出错误
Object.defineProperty(person, "name", {
    configurable: true,
    value: "Nicholas"
});

/////////////////////////////////////////////////
var book = {
    _year: 2004,
    edition: 1
}

Object.defineProperty(book, "year", {
    get: function() {
        return this._year;
    },
    set: function(newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
alert(book.edition); // 2
/////////////////////////////////////////////////
