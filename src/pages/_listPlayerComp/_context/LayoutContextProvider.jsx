import * as React from 'react';

export const LayoutContext = React.createContext({
    changeDominantColor: () => null,
    dominantColor: ""
});

export const LayoutContextProvider = ({initialState, children}) => {
    return(
        <LayoutContext.Provider value={initialState}>
            {children}
        </LayoutContext.Provider>
    )
}