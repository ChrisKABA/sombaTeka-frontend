import { Star } from "../icon/Star"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
}

export default function StarRating({ rating, maxRating = 5, size = "sm" }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          className={`${sizeClasses[size]} ${index < rating ? "text-secondaryColor" : "text-secondaryColor"}`}
        />
      ))}
    </div>
  )
}

