import {configureStore} from "@reduxjs/toolkit"
import Cartslice from "./slices/Cartslice"

export default configureStore({
    reducer:{
        cart:Cartslice
    }
})
