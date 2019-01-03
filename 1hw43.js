var Hamburger = function (type, topping) {
    if (type === Hamburger.size_small) {

        console.log(type + ' CheeseBurger + topping ' + topping);
        var typePrice = 60;
        var typeCalories = 200;

    } else if (type === 'large') {
        console.log(type + ' CheeseBurger + topping ' + topping);
        var typePrice = 80;
        var typeCalories = 300;
    } else {
        throw new Error('Size is incorrect');
    }

    this.getPrice = function () {
        switch (topping) {
            case 'cheese':
                var price = typePrice + 15;
                break;

            case 'salad':
                var price = typePrice + 5;
                break;

            case 'fries':
                var price = typePrice + 10;
                break;

            default:
                break;
        }
        return price;
    }
    this.getCalories = function () {
        switch (topping) {
            case 'cheese':
                var calories = typeCalories + 50;
                break;

            case 'salad':
                var calories = typeCalories + 5;
                break;

            case 'fries':
                var calories = typeCalories + 25;
                break;

            default:
                break;
        }
        return calories;
    }
};

Hamburger.size_small = ('small');
Hamburger.size_large = ('large');
Hamburger.topping_cheese = ('cheese');
Hamburger.topping_salad = ('salad');
Hamburger.topping_fries = ('fries');

var cheeseburger = new Hamburger('large', 'fries');
console.log('Total Price: ', cheeseburger.getPrice()); // 75
console.log('Total Calories: ', cheeseburger.getCalories()); // 250
