//Business Logic----->
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = 0,
  this.price = 0
}

Pizza.prototype.toppingsLogic = function() {
  if(document.getElementById("pizzaToppings1").checked) {
    this.toppings += 2;
    this.price = this.toppings;
  } if(document.getElementById("pizzaToppings2").checked) {
    this.toppings += 2;
    this.price = this.toppings;
  } if(document.getElementById("pizzaToppings3").checked) {
    this.toppings += 2;
    this.price = this.toppings;
  } if(document.getElementById("pizzaToppings4").checked) {
    this.toppings += 2;
    this.price = this.toppings;
  }
}

Pizza.prototype.priceLogic = function() {
  if(this.size === 8) {
    this.price += 4;
  }if(this.size === 12) {
    this.price += 6;
  }if(this.size === 18) {
    this.price += 8;
  }
}

//UI Logic----->
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var sizeInput = parseInt($("#pizzaSize").val());
    var toppingsInput = parseInt($("input:checkbox[name=toppings]:checked").val());
    var newPizza = new Pizza(sizeInput, toppingsInput)
    newPizza.toppingsLogic();
    newPizza.priceLogic();
    $("#pizzaOutput").text("Your total is " + "$" + newPizza.price);
  });
});
