class Cart{

    cartItems;
    #getItemKey;

    constructor(getItemKey){

        this.#getItemKey = getItemKey
        this.#loadFromStorage()


    }

    
    #loadFromStorage(){


        this.cartItems = JSON.parse(localStorage.getItem(this.#getItemKey)) || [
            {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
            },
            {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: "2",
            },
        ];



        }


         saveToStorage() {
            localStorage.setItem(this.getItemKey, JSON.stringify(this.cartItems));
        }

        

        addToCart(productId) {
            const existingItem = this.cartItems.find((item) => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cartItems.push({
                productId,
                quantity: 1,
                deliveryOptionId: "1",
                });
            }

            this.saveToStorage();
            }



            removeFromCart(productId) {
                this.cartItems = this.cartItems.filter((item) => item.productId !== productId);
                this.saveToStorage();
            }



            updateCartDelivery(productId, deliveryOptionId) {
                const item = this.cartItems.find((item) => item.productId === productId);
                if (item) {
                    item.deliveryOptionId = deliveryOptionId;
                    this.saveToStorage();
            }
            }
    


}




const cart = new Cart('cart-oop')

const businessCart = new Cart('businessCart')



console.log(cart)

console.log(businessCart)

