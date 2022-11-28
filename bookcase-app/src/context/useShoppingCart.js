import React , {createContext, useContext}from 'react'

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

// export function ShoppingCartContext({children}) {
//   return <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>
// }

