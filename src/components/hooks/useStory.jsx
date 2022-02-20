import { useState } from "react";

const useStory = (initialStory) => {
    const [stories, setStory] = useState(initialStory)

    const getStories = (response) => {
        const A = response.filter((line) =>
        line.id.includes("a") ? line : null);
        
        const B = response.filter((line) =>
        line.id.includes("b") ? line : null); 
        setStory({ A, B })
    }
    

    return [
        stories,
        getStories,
    ]
}

export default useStory;

