import { useReducer, createContext } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const ShoppingCartContext = createContext({
    items: [],
    addItemToCart: (item) => { },
    updateItemQuantity: (productId, amount) => { },
});

function shoppingCartReducer(state, action) {
    if (action.name === "ADD_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            ...updatedItems,
            items: updatedItems,
        };
    }

    if (state.action === "UPDATE_QUANTITY") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === state.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += state.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
        };
    }

    return state

}

export default function ShoppingCartProvider({ children }) {
    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    // });

    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
        items: []
    })

    function handleAddItemToCart(id) {
        shoppingCartDispatch(
            {
                name: "ADD_ITEM",
                payload: id
            }
        )
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart(
            {
                name: "UPDATE_QUANTITY",
                payload: {
                    productId,
                    amount
                }
            }
        )
    }

    const cartContext = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };

    return (
        <ShoppingCartContext.Provider value={cartContext}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
