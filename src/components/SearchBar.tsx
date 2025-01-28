import { useState } from "react"
import CustomButton from "./CustomButton"
import InputField from "./InputField"
import type { SearchBarProps } from "../types/SearchBarProps"

export default function SearchBar({ categories, onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSearch(searchQuery, selectedCategory)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex w-full">
            <select 
            name="category" 
            id="category-select" 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="Catégories" disabled>Catégories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.slug}>
                        {category.name}
                    </option>
                ))}
            </select>
            <InputField
            id="search-input"
            name="searchQuery"
            type="text"
            value={searchQuery}
            required={false}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher Products"
            />
            <CustomButton
            type='submit'
            bg="secondaryColor" 
            textColor="primaryColor" 
            fontFamily="inter" 
            width='100%'
            disabled={false}
            >
                <img src="/icon_search.svg" alt="icon de recherche" />
            </CustomButton>
        </div>
      </form>
    )
  }
  