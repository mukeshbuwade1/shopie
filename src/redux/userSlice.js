import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        updateUserData: (state, action) => {
            return action.payload
        }
    }
})

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer