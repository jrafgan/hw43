var a = $('.total1');
var b = $('.total3');
var c = $('.total5');
var d = $('.total10');
var a1 = $('.quantity1');
var b1 = $('.quantity3');
var c1 = $('.quantity5');
var d1 = $('.quantity10');


const PiggyBank = function () {
    this.coins = {1: 0, 3: 0, 5: 0, 10: 0};
    const self = this;
};
PiggyBank.prototype.addCoin = (value) => {
    this.coins[value] += 1;
    self.total = this.coins[value];
    self.value = value;
    $('.quantity' + value).text(self.total);
    const total = self.total * self.value;
    $('.total' + value).text(total);
    const e = parseInt(a.text());
    const f = parseInt(b.text());
    const g = parseInt(c.text());
    const h = parseInt(d.text());
    $('.grand_total').text('Grand Total : ' + (e + f + g + h));
    localStorage.setItem(value, self.total);
};

const privatePB = function () {
    if (localStorage.getItem(1) !== null || localStorage.getItem(3) !== null || localStorage.getItem(5) !== null || localStorage.getItem(10) !== null) {
        const e = parseInt(localStorage.getItem(1));
        const f = parseInt(localStorage.getItem(3));
        const g = parseInt(localStorage.getItem(5));
        const h = parseInt(localStorage.getItem(10));
        a1.text(e);
        b1.text(f);
        c1.text(g);
        d1.text(h);
        a.text(1 * e);
        b.text(3 * f);
        c.text(5 * g);
        d.text(10 * h);
        $('.grand_total').text('Grand Total : ' + (1 * e + 3 * f + 5 * g + 10 * h));
    }
};

PiggyBank.prototype.getTotal = function () {
    const totalAmount = self.total * self.value;

};

const pb = new PiggyBank();
const observer = new Observer();

observer.on('coin_added', function (e) {

    pb.addCoin(e.value);
    observer.trigger('coins_change');
});
observer.on('coins_change', function (e) {
    const total = pb.getTotal();
    const coins = pb.coins;


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

$('.empty_pb').on('click', function () {
    localStorage.clear();
});

const registerNewUser = function () {
    login = prompt(`You don't have account\nPlease, register in Piggy Bank\n 1-st enter your Login`);
    pswd = prompt(' 2-nd enter your Password');
    hash = md5(pswd);
    catalog.push({login: login, hash: hash});
    var id1 = JSON.stringify(catalog);
    localStorage.setItem('user', id1);
    $('#login').val('');
    $('#pswd').val('');
};

const catalog = [];

$('#login-btn').on('click', function (e) {
    e.preventDefault();
    const login = $('#login').val();
    const pswd = $('#pswd').val();
    if (localStorage.getItem('user') !== null) {
        const id = JSON.parse(localStorage.getItem('user'));
        const hash = md5(pswd);
        const index = id.findIndex(p => p.login === login);

        if (index !== -1 && id[index].hash === hash) {
            privatePB();
        } else {
            registerNewUser();
        }
    } else {
        registerNewUser();
    }
});