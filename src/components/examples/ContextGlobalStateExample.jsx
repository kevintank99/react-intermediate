import React, { createContext, useContext, useMemo, useReducer } from "react";

const AuthContext = createContext(null);

const UserBadge = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="text-sm">
      {auth?.user ? (
        <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700">{auth.user}</span>
      ) : (
        <span className="px-2 py-1 rounded bg-gray-100 text-gray-600">Guest</span>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { user: action.user };
    case "logout":
      return { user: null };
    default:
      return state;
  }
}

const ContextGlobalStateExample = () => {
  const [state, dispatch] = useReducer(reducer, { user: null });
  const value = useMemo(() => ({ user: state.user }), [state.user]);
  return (
    <AuthContext.Provider value={value}>
      <div className="space-y-2 text-gray-700">
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 rounded bg-black text-white"
            onClick={() => dispatch({ type: "login", user: "Kevin Tank" })}
          >
            Login
          </button>
          <button
            className="px-3 py-1 rounded bg-black text-white"
            onClick={() => dispatch({ type: "logout" })}
          >
            Logout
          </button>
        </div>
        <UserBadge />
      </div>
    </AuthContext.Provider>
  );
};

export default ContextGlobalStateExample;


