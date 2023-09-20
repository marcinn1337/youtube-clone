import { useState, useContext, createContext } from 'react'

const CategoryContext = createContext()
export const useCategory = () => useContext(CategoryContext)

export function CategoryProvider({ children }) {
	const [selectedCategory, setSelectedCategory] = useState('Trending')
	const updateCategory = categoryName => {
		setSelectedCategory(categoryName)
	}

	return <CategoryContext.Provider value={{ selectedCategory, updateCategory }}>{children}</CategoryContext.Provider>
}
