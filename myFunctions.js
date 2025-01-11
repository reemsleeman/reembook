function toggleDetails(button) {
    var row = $(button).closest('tr');
    var detailsRow = row.next('.book-details');
    detailsRow.toggle();
}

function showOrderForm(button) {
    var selectedBook = $(button).closest('tr').find('td').eq(1).text();
    $('#selected-book').val(selectedBook);
    $('#order-form').show();
}

function showDetails() {
    const details = document.getElementById('details');
    details.style.display = (details.style.display === 'none') ? 'block' : 'none';
}

document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function () {
        alert('Details for this book will be displayed here.');
    });
});

$(document).ready(function () {
    $("#order-form-details").on("submit", function (e) {
        e.preventDefault();

        var name = $("#name").val();
        var nationalId = $("#national-id").val();
        var dob = $("#dob").val();
        var phone = $("#phone").val();
        var email = $("#email").val();

        // Validate inputs
        if (!/^\d{11}$/.test(nationalId)) {
            alert("Invalid National ID");
            return;
        }
        if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
            alert("Invalid Date of Birth format. Use: DD-MM-YYYY");
            return;
        }
        if (!/^\d{9}$/.test(phone)) {
            alert("Invalid phone number");
            return;
        }

        alert("Order successfully submitted for: " + $("#selected-book").val());
        // Optionally clear the form
        $('#order-form-details')[0].reset();
    });
});
const buttons = document.querySelectorAll('.details-button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const details = this.getAttribute('data-details');
        document.getElementById('book-details-text').textContent = details;
        document.getElementById('details-popup').style.display = 'block';
    });
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('details-popup').style.display = 'none';
});
