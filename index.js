var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

var test= new Object();
test[item]=Math.floor(Math.random()*100);
cart.push(test);
console.log(`${item} has been added to your cart.`);
Object.assign(cart,{item: Math.floor(Math.random()*100)});
console.log(`${cart.item} has been added to your cart.`);

return cart
}

function viewCart() {
  // write your code here
  var string1 ="In your cart, you have ";
    console.log(string1);
  if(cart.length==0){console.log("Your shopping cart is empty.")};

  for(let i=cart.length;i>0;i--){
    string1+=`${cart[cart.length-i][Object.keys(cart[cart.length-i])]}`
  }
}

function total() {
  // write your code here
  var total=0;
  for(let i=cart.length;i>0;i--){
    var v=Object.values(cart[cart.length-i]);
    total+=parseInt(v);
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var found =0;
  for(let i=cart.length;i>0;i--){
    if(cart[cart.length-i].hasOwnProperty(item)==true){
      cart.splice(cart.length-i,1);
      found =1;
    }
  }

  if (found==1){
    return cart
  }
  else{
    console.log("That item is not in your cart.");
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber == 'undefined'){
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[];
  }
}
