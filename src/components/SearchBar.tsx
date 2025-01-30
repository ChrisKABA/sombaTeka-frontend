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
      <form onSubmit={handleSubmit} className="w-[60%]">
        <div className="flex w-full">
            <select 
            name="category" 
            id="category-select" 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-[20%] border-r border-borderColor px-4 focus:outline-none focus:border-transparent"
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
            className="w-[70%] px-4 focus:outline-none focus:border-transparent"
            />
            <CustomButton
            type='submit'
            bg="secondaryColor" 
            textColor="primaryColor" 
            fontFamily="inter" 
            width='10%'
            disabled={false}
            className="flex justify-center items-center"
            >
                <img src="/icon_search.svg" alt="icon de recherche" />
            </CustomButton>
        </div>
      </form>
    )
  }
  