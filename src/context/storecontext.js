import { createContext, useReducer } from "react";

// Store Creation
const StoreContext = createContext()

const initialState = {
    cart: []
}

// Reducer logic >> state change action - how to
function reducer(state, action) {
    switch (action.type) {
        case "add_cart":
            const existing = state.cart.find((item) => item.id === action.product.id)
            if (existing) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.product.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                }
            }

            return {
                ...state,//hold previous all  actions
                cart: [...state.cart, { ...action.product, qty: 1 }],
            }

        case "remove_cart":
            return{
                ...state,
                cart: state.cart.fillter((item)=>item.id !==action.id)
            }

        case "increase_qty":
            return{
                ...state,
                cart: state.cart.map((item)=> item.id===action.id ?
                 {...item,qty : item.qty+1}
                   : item)
            }
    }
}






export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);


    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext; 