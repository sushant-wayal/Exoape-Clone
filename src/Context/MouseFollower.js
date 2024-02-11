import { createContext, useContext } from "react";

export const MouseFollowerContext = createContext({
    content: "",
    // radius: 0,
    setContent: (newContent) => {},
    // setRadius: (newRadius) => {},
    appear: () => {},
    disappear: () => {},
})

export const MouseFollowerProvider = MouseFollowerContext.Provider;

export const useMouseFollower = () => {
    return useContext(MouseFollowerContext);
}