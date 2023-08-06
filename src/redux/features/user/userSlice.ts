import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../components/lib/Firebase";

interface IUserState {
  user: Partial<User> | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ISignUpCredential {
  userName: string;
  imageUrl: string;
  email: string;
  password: string;
}
interface ILoginCredential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ userName, imageUrl, email, password }: ISignUpCredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile((auth?.currentUser as User) || null, {
      displayName: userName,
      photoURL: imageUrl,
    });
    return data.user;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: ILoginCredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User> | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
