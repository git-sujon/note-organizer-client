import { User } from "firebase/auth";

export interface UserProfileProps {
    user: Partial<User> |null
    isLoading: boolean;
  }
  