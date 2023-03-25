import {configureStore} from '@reduxjs/toolkit'
import productReducer from "./redux/slices/product/productSlice"
import appReducer from "./redux/slices/app/appSlice"
import {productApi} from "./redux/api/productAPI";

export const store = configureStore({
    reducer: {
        product: productReducer,
        appConfig: appReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({})
            .concat(productApi.middleware)
})