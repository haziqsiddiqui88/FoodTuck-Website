import { Star } from "lucide-react";

const Rating = () => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" className="w-5 h-5" />
      ))}
    </div>
  );
};

export default Rating;
