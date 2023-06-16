// This code will add drinks to the cart when they are clicked.
$(document).ready(function() {
    $('.drink').click(function() {
      var drink = $(this).data('drink');
      var cart = $('#cart');
      var li = $('<li>' + drink + '</li>');
      cart.append(li);
    });
  });
  