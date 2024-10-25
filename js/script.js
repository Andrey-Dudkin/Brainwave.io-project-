const counterCart = document.querySelector(".navbar__basket-number");
const cardButtons = document.querySelectorAll(".product-card__btn");
cardButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerHTML === `<span class="product-card__span">+</span>Add to cart`){
            btn.innerHTML = `<span class="product-card__span">-</span> Remove from cart`;
            counterCart.textContent ++;
            btn.style.columnGap = `10px`;
        }else{
            btn.innerHTML = `<span class="product-card__span">+</span>Add to cart`;
            counterCart.textContent  --;
            btn.style.columnGap = `16px`;
        }
    });
});