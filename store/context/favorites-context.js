import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setfavoriteMealsIds] = useState([]);

    function addFavorite(id) {
        setfavoriteMealsIds((currentIds) => [...currentIds, id])
    }

    function removeFavorite(id) {
        setfavoriteMealsIds((currentIds) =>
            currentIds.filter((mealId) => mealId !== id)
        )
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;