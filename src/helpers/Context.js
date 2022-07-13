import { createContext, useState, useContext} from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fakeAuthProvider = {
    isAuthenticated: false,
    signIn(callback) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100);
    },
    signOut(callback) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };

  const signIn = (newUser, callback) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return useContext(AuthContext);
}








export { AuthProvider, useAuth };