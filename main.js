let billAmount = 0;
let globalTotal = 0;

$('#check').on('change', function () {
    billAmount = parseFloat($(this).val());
});

// On any percentage button click, calculate the tip.
$('.tip-btn').on('click', function () {

    let tipPercentage = 0;

    tipPercentage = parseFloat($(this).val());

    let tipTotal = billAmount * tipPercentage;
    let billTotal = billAmount + tipTotal;

    $('#bill').text("Bill:  $" + billAmount.toFixed(2));
    $('#tip').text("Tip:  $" + tipTotal.toFixed(2));
    $('#total').text("Total:  $" + billTotal.toFixed(2));

    globalTotal = billTotal;
});

// Rounds up the base bill amount to the nearest whole dollar.
$('#round-btn').on('click', function () {

    let tipPercentage = 0;

    tipPercentage = parseFloat($(this).val());

    let tipTotal = Math.ceil(billAmount) - billAmount;
    let billTotal = billAmount + tipTotal;

    $('#bill').text("Bill:  $" + billAmount.toFixed(2));
    $('#tip').text("Tip:  $" + tipTotal.toFixed(2));
    $('#total').text("Total:  $" + billTotal.toFixed(2));

    globalTotal = billTotal;
});

// Calculates the tip by the custom percentage given (#custom-perc).
$('#custom-perc').on('change', function () {

    let tipPercentage = 0;

    tipPercentage = parseFloat($(this).val() / 100);

    let tipTotal = billAmount * tipPercentage;
    let billTotal = billAmount + tipTotal;

    $('#bill').text("Bill:  $" + billAmount.toFixed(2));
    $('#tip').text("Tip:  $" + tipTotal.toFixed(2));
    $('#total').text("Total:  $" + billTotal.toFixed(2));

    globalTotal = billTotal;
});

// Split button, splits the total into the number given (#split-input).
$('#split-btn').on('click', function () {

    if (globalTotal > 0) {
        $('#split').text("Split:  " + $('#split-input').val() + " x $" + (globalTotal / parseFloat($('#split-input').val())).toFixed(2));
    } else {
        $('#split').text("Split:  " + $('#split-input').val() + " x $" + (billAmount / parseFloat($('#split-input').val())).toFixed(2));
    };

});

// Clear button, pretty obvious what it does...
$('#clear-btn').on('click', function () {
    $('#check').val("");
    $('#custom-perc').val("");
    $('#bill').text("Bill: $0.00");
    $('#tip').text("Tip: $0.00");
    $('#total').text("Total: $0.00");
    $('#split').text("");
});

// Modal button, show tip suggestions.
$('#how-btn').on('click', function () {
    $('#tip-advice-modal').modal('show');
});
