import { Button } from "./ui/button";
import Image from "next/image";
import { quickSearchOptions } from "./_constants/quicksearch";

const QuickSearch = () => {
    return (
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {quickSearchOptions.map((option) => (
                <Button className="gap-2 " variant="secondary" key={option.title}>
                <Image src={option.imageUrl} width={16} height={16} alt={option.title}/>
                {option.title}
                </Button>
            ))}
        </div>
     );
}
 
export default QuickSearch;