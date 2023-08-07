import { User } from "firebase/auth";

export interface UserProfileProps {
  user: Partial<User> | null;
  isLoading: boolean;
}

export interface INotes {
  _id: string;
  title: string;
  notesDetails: string;
  category: string;
  imgUrl?: string;
  tags?: [
    {
      tagName: string;
    }
  ];
  userinfo: {
    userEmail: string;
    userImgUrl?: string;
  };
  privacy: "Public" | "private";
  createdAt:string
}
