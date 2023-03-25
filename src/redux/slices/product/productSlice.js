import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    title: "Intelligent Finite Element in Structural mechanics",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    videoLink: "https://www.youtube.com/watch?v=GHjopp47vvQ",
    categories: "Label 1, Label 2, Label 3",
    businessModel: "Label 1, Label 2, Label 3",
    TRL: "TRL 1 – Basic principles observed (product idea available)",
    cost: "< 1000 $"
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
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
    updateTitle,
    updateBusinessModel,
    updateCategories,
    updateTRL,
    updateCost,
    updateDescription,
    updateVideoLink
} = productSlice.actions;

export default productSlice.reducer;