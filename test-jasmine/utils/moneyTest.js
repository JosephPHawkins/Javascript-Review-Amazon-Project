import { formatPrice } from "../../scripts/utils/money.js";
import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: format money price', () => {
    it('convert price to cents', () => {
        expect(formatPrice(3025)).toEqual('30.25');
    });

    it('convert 0 to a price', ()=> {
        expect(formatPrice(0)).toEqual('0.00');
    });

    it('round long number to a price', ()=> {
        expect(formatPrice(30000020056)).toEqual('300000200.56');
    });
});



describe('test suite: cart', ()=> {

    it('test added cart already inside', () => {
        
        spyOn(localStorage, 'setItem')

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([

                 {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1,
                deliveryOptionId: "1",
                },
            ])
        })

        loadFromStorage()

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart[0].quantity).toEqual(2)

    })


    it('test added cart', () => {

        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart[0].quantity).toEqual(1)
        
    });
});
