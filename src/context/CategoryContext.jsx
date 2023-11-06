import { useState, useContext, createContext } from 'react'

const CategoryContext = createContext()
export const useCategory = () => useContext(CategoryContext)

export function CategoryProvider({ children }) {
	const [selectedCategory, setSelectedCategory] = useState({
		name: 'home',
		type: 'default'
	})
	const updateCategory = category => {
		setSelectedCategory(category)
	}

	return <CategoryContext.Provider value={{ selectedCategory, updateCategory }}>{children}</CategoryContext.Provider>
}
