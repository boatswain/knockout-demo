console.log(ko);

$.get('http://fan.wandoulabs.com/api/all')
    .done(function(data) {
        bindings.rests(data);
    });


var bindings = {
    rests: ko.observableArray(),
    menu: ko.observableArray(),
    dishes: ko.observableArray(),
    getMenu: function(data, e) {
        $.get('http://fan.wandoulabs.com/api/' + data.url)
            .done(function(data) {
                bindings.menu(data);
                // bindings.dishes([]);
            });
    },
    lookDishes: function(data) {
console.log(data);
        bindings.dishes(data.dishes);
    }
};
bindings.dishCount =  ko.computed(function() {
        return bindings.menu().length;
    });

bindings.menu.subscribe(function(newValue) {
    bindings.dishes([]);
});

ko.applyBindings(bindings);