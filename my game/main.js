var money = 1;

function changeMoney(amount) {
    money = money + amount;
    document.getElementById('money').innerHTML = money;
    ifMoneyTooMuch();
}   

function ifMoneyTooMuch() {
    if (money < 0) {
        alert('wait how did u get minus money???');
    }

    if (money > 0) {
        console.log('your money is more than 0 i guess')
    }
}