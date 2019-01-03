var PiggyBank = function () {
    this.coins = {1: 0, 3: 0, 5: 0, 10: 0};
    var self = this;
};
PiggyBank.prototype.addCoin = function (value) {
    self.total = this.coins[value];
    self.total = this.coins[value] + 1;
    this.coins[value] = self.total;
    self.value = value;

    console.log(self.total);
}
PiggyBank.prototype.getTotal = function () {
    var totalAmount = self.total * self.value;
    console.log(totalAmount);
}

var pb = new PiggyBank();
var observer = new Observer();

observer.on('coin_added', function (e) {
    console.log('Coin_added', e);
    pb.addCoin(e.value);
    observer.trigger('coins_change');
});
observer.on('coins_change', function (e) {
    var total = pb.getTotal();
    var coins = pb.coins;
    console.log('coins changed');

});
$('#add_one').on('click', function () {
    observer.trigger('coin_added', {value: 1});
});
$('#add_three').on('click', function () {
    observer.trigger('coin_added', {value: 3});
});
$('#add_five').on('click', function () {
    observer.trigger('coin_added', {value: 5});
});
$('#add_ten').on('click', function () {
    observer.trigger('coin_added', {value: 10});
});