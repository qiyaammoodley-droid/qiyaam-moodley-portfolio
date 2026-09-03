import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { menuOpen: false, contactStatus: "idle" as "idle" | "loading" | "success" | "error" },
  reducers: {
    toggleMenu: state => { state.menuOpen = !state.menuOpen; },
    closeMenu: state => { state.menuOpen = false; },
    setContactStatus: (state, action: PayloadAction<typeof state.contactStatus>) => {
      state.contactStatus = action.payload;
    }
  }
});

export const { toggleMenu, closeMenu, setContactStatus } = uiSlice.actions;

export const store = configureStore({
  reducer: { ui: uiSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
