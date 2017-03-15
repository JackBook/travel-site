function Person(fullName, favColor) {
    this.greet = function() {
        this.name = fullName;
        this.favoriteColor = favColor;
        console.log("Hello There" +fullName+ " and " +favColor);
    }
}

module.exports = Person;