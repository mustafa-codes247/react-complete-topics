import { createContext,useState } from "react";

// useContext is used to manage the state globally 
// in usecontext, there are 3 parts 
// 1-create (creating the context component)
// 2-provide(just 1 more step simply)
// 3-consume(using tha component where you need)


// creating:
export const ThemeContext = createContext();

// providing:
// children means whatever components you place **inside** `<ThemeProvider>...</ThemeProvider>` will be able to access the shared values.
export const ThemeProvider=({children})=>{
        const [theme,setTheme]=useState("light");

// previous is just parameter , we can use any thing like e, prv etc
// funciton made so that it state changed on button click
        const toggleTheme=()=>{
                setTheme((previous)=>previous==="light"?"dark":"light")
        }

return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
        </ThemeContext.Provider>
)
}