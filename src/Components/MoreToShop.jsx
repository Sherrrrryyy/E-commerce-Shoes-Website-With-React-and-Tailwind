import React, { useRef, useState, useEffect } from 'react'

const MoreToShop = () => {
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalDots, setTotalDots] = useState(0);

    const shoes = [
        {
            id: 1,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/7Lvy6fl9eGeEN6iTKl2Utf/db274f0bca7363dc33331a5de391b4ea/A11002_24Q4_Wool_Runner_2_Stony_Beige_Stony_Cream_PDP_LEFT-2000x2000.png',
            color: 'Stoney Beige',
            price: '$77',
            title: "Women's Wool Runner Go"
        },
        {
            id: 2,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/bw4SdMkzSTPmD7bLOnIMr/95b9c8250de2d7adc75cdcefb204d15f/A11085_24Q3_Wool_Dasher_2_Mizzle_Dark_Grey_Arid_Beige_PDP_LEFT.png',
            color: 'Dark Grey',
            price: '$101',
            title: "Men's Wool Dasher Mizzles"
        },
        {
            id: 3,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/257MrVODI72TTS6J4741dG/75e534cdd05d8c4bcf6b5a66d268f9fe/A10985_24Q4_Wool_Runner_2_Fluff_Natural_White_Natural_White_PDP_LEFT-1000x1000.png',
            color: 'Natural white',
            price: '$60',
            title: "Women's Wool Runner Go-Fluff"
        },
        {
            id: 4,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/1vQDHzOoMjC0EQm6a1HYry/3e33d6b9f1eec007aaa149588ef1b388/A10962_24Q4_Tree_Runner_Go_Stony_Cream_Stony_Cream_PDP_LEFT-2000x2000.png',
            color: "Stoney Cream",
            price: '$120',
            title: "Men's Tree Runner Go"
        },
        {
            id: 5,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/onXvGeOjkk4TnV9u9j0O6/bb3abf9144cfbb14c40ea445694def6b/TB1WJBK_SHOE_LEFT_GLOBAL_WOMENS_TREE_BREEZER_JET_BLACK_BLACK.png',
            color: 'Jet Black',
            price: '$100',
            title: "Women's Tree Breezers"
        },
        {
            id: 6,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/4Z8F1HXuA4YULfGpqJDyCg/5d62a8b67fd7d678680ff46016dec100/TR2MNNT_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_NAVY_NIGHT_DARK_NAVY.png',
            color: 'Navy Night',
            price: '98',
            title: "Men's Tree Runner"
        },
        {
            id: 7,
            imageUrl: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto/w_600/cms/68XZCkL5CN7ko5Ei1l5N1U/070182cfb3b47fa77cd2889aa45f78ad/A11072_24Q3_Tree_Glider_Blizzard_Blizzard_PDP_LEFT.png',
            color: "Blizzard",
            price: '$135',
            title: "Women's Tree Gliders"
        }
    ]

    useEffect(() => {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const dots = Math.ceil(totalWidth / containerWidth);
        setTotalDots(dots);
    }, []);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalDots - 1));
    };

    return (
        <>
            <h2 className="text-2xl font-bold flex justify-start text-gray-800 mt-12 mb-4">More to shop</h2>
            <div className="relative">
                <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
                    &lt;
                </button>
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 p-4">
                    {
                        shoes.map((shoe) => {
                            return (
                                <div key={shoe.id} className="flex-shrink-0 w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center justify-between p-4 bg-gray-50 rounded-md shadow-md transform transition-transform duration-500 hover:scale-105">
                                    <img src={shoe.imageUrl} alt={shoe.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">{shoe.title}</h3>
                                    <p className="text-gray-600 mb-2">{shoe.color}</p>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 font-bold line-through">${250}</span>
                                        <span className="ml-2 text-lg font-bold text-gray-800">{shoe.price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                    &gt;
                </button>
                <div className="flex justify-center mt-4">
                    {
                        Array.from({ length: totalDots }).map((_, index) => (
                            <div key={index} className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}></div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MoreToShop