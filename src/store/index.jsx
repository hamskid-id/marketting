import { configureStore } from "@reduxjs/toolkit";
import product_Slice, { GetProducts, GetFaq,GetReview} from "./productSlice"

const store = configureStore({
    reducer:{
        product: product_Slice.reducer
    }
});

store.dispatch(GetFaq(null));
store.dispatch(GetProducts(null));
store.dispatch(GetReview({id:1}));
export default store;