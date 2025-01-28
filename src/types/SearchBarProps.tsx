import { Category } from "./categorieType"

export interface SearchBarProps {
    categories: Category[]
    onSearch: (query: string, category: string) => void
  }