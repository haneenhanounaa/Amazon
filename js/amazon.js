import {cart,addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formateCurrency } from './utils/money.js';



//1  الداتا لازم اجيبها من الملف يلي اسمه داتا

//3 بدي اجمع عناصر الاتش تي  مع بعض 
let productsHTML='';

//2  الداتا يلي اجت هان من مجلد الداتا بملف البرودكت htmlعناصر ال     
products.forEach((product)=>{
  productsHTML = productsHTML+ `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
     ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
    $${formateCurrency(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png" >
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>
    `;
});

//4 بدي اخد الاتشتي يلي جبته و احطه ع الصفحة 

document.querySelector('.products-grid').innerHTML=productsHTML;

// من خلال الفنكشن رح يضيف ع الكارد


function updateCartQun(){

  let cartQun=0; // هان بدأت اضيف البرودكت لل كارت

   cart.forEach((CartItem)=>{
    cartQun += CartItem.quntity;
   });

   document.querySelector('.cart-quantity').innerHTML=cartQun;
  

}

//5  رح يضيف المنتج ع الكارد بدي افعل زر الأاد
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
   const productId= button.dataset.productId;

   addToCart(productId);
   updateCartQun();  
  });

});