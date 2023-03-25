import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    title: "",
    description: "",
    videoLink: "",
    categories: "",
    businessModel: "",
    TRL: "",
    cost: "",
    picture: "",
    userName: "",
    profilePicture: "",
    companyName: "",
    companyLogo: "",
    address: "",
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        updateProduct: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.videoLink = action.payload.videoLink;
            state.categories = action.payload.categories;
            state.businessModel = action.payload.businessModel;
            state.TRL = action.payload.TRL;
            state.cost = action.payload.cost;
            state.userName = action.payload.userName;
            state.profilePicture = action.payload.profilePicture;
            state.companyName = action.payload.companyName;
            state.companyLogo = action.payload.companyLogo;
            state.address = action.payload.address;
            state.picture = action.payload.picture;
        },
        updateTitle: (state, action) => {
            state.title = action.payload.title;
        },
        updateDescription: (state, action) => {
            state.description = action.payload.description;
        },
        updateVideoLink: (state, action) => {
            state.videoLink = action.payload.videoLink;
        },
        updateCategories: (state, action) => {
            state.categories = action.payload.categories;
        },
        updateBusinessModel: (state, action) => {
            state.businessModel = action.payload.businessModel;
        },
        updateTRL: (state, action) => {
            state.TRL = action.payload.TRL;
        },
        updateCost: (state, action) => {
            state.cost = action.payload.cost;
        }
    },
});

export const {
    updateProduct,
    updateTitle,
    updateBusinessModel,
    updateCategories,
    updateTRL,
    updateCost,
    updateDescription,
    updateVideoLink
} = productSlice.actions;

export default productSlice.reducer;