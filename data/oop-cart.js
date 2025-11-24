
function Cart(getItemKey){
    const cart = {

        cartItems: undefined,  
    
        loadFromStorage(){


        this.cartItems = JSON.parse(localStorage.getItem(getItemKey)) || [
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



        }, 

        saveToStorage() {
            localStorage.setItem(getItemKey, JSON.stringify(this.cartItems));
        }, 


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
            }, 


            removeFromCart(productId) {
                this.cartItems = this.cartItems.filter((item) => item.productId !== productId);
                this.saveToStorage();
            }, 


            updateCartDelivery(productId, deliveryOptionId) {
                const item = this.cartItems.find((item) => item.productId === productId);
                if (item) {
                    item.deliveryOptionId = deliveryOptionId;
                    this.saveToStorage();
            }
        }







    }

      return cart

    }

    

  




const cart = Cart('oop_cart')
const businessCart = Cart('businessCart')


cart.loadFromStorage()

businessCart.loadFromStorage()

cart.addToCart('8c9c52b5-5a19-4bcb-a5d1-158a74287c53')
cart.addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d')


console.log(cart)
console.log(businessCart)








console.log(cart)