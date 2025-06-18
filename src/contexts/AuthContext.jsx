import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Find user with matching email and password
      const foundUser = users.find(
        (u) =>
          u.email === credentials.email && u.password === credentials.password
      );

      if (!foundUser) {
        throw new Error("Invalid email or password");
      }

      // Store user in localStorage and state
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        display_name: foundUser.display_name,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return userData;
  };

  const register = async (userData) => {
      // Get existing users
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if email already exists
      if (users.some((u) => u.email === userData.email)) {
        throw new Error("Email already registered");
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        display_name: userData.display_name,
        password: userData.password,
      };

      // Save to localStorage
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Log the user in
      const userToStore = {
        id: newUser.id,
        email: newUser.email,
        display_name: newUser.display_name,
      };

      localStorage.setItem("user", JSON.stringify(userToStore));
      setUser(userToStore);

      return userToStore;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
