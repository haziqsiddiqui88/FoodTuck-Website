// src/context/UserContext.tsx
import { createContext, useContext, ReactNode } from 'react';

interface User {
  fullName: string;
  emailAddress: { emailAddress: string }[];
  id: string;
}

interface UserContextProps {
  user: User | null;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Replace this with actual user data, e.g., from an API or authentication service
  const user = {
    fullName: "John Doe",
    emailAddress: [{ emailAddress: "johndoe@example.com" }],
    id: "user123",
  };

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
