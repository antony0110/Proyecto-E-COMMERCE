const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
            case 'LOGOUT':
                return {
                    ...state,
                    user: undefined 
                }
                case 'ADD_CART':
                    return {
                        ...state,
                        cart: [...state.cart, action.payload]
                    }
                case 'CLEAR_CART':
                    return {
                        ...state,
                        cart: []
                    }
                    case 'GET_ALL_PRODUCTS':
                        return {
                            ...state,
                            products: action.payload
                        }
                        case 'SEARCH':
                        return {
                            ...state,
                            search: action.payload
                        }
                default:
                    return state;
            }
        };

export default reducer;