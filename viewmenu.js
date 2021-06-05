var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];

var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Thank you so much!")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Thêm
var addcart = document.getElementsByClassName("milk-icon");
for (var i = 0; i < addcart.length; i++) {
  var add = addcart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var title = product.getElementsByClassName("name")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price)
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var carttitle = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < carttitle.length; i++) {
    if (carttitle[i].innerText == title) {
      alert('OK')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Delete</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var buttonremove = event.target
    buttonremove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
// Sửa 
function updatecart() {
  var cartitem = document.getElementsByClassName("cart-items")[0];
  var cartrows = cartitem.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartrows.length; i++) {
    var cartrow = cartrows[i]
    var priceitem = cartrow.getElementsByClassName("cart-price ")[0]
    var quantityitem = cartrow.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(priceitem.innerText)
    var quantity = quantityitem.value
      total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = '$' + total
}

// xóa 
var removecart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < removecart.length; i++) {
  var button = removecart[i]
  button.addEventListener("click", function () {
    var buttonremove = event.target
    buttonremove.parentElement.parentElement.remove()
    updatecart()
  })
}

var quantityinput = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantityinput.length; i++) {
  var input = quantityinput[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}