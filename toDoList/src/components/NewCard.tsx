import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import Card from "./Card";

function NewCard() {
    const [favoriteCard, setFavoriteCard] = useState(false);
    const [cards, setCards] = useState<{
        color: string; text: string; title: string; favorite: boolean }[]>([]);
    const [newTitle, setNewTitle] = useState("");
    const [newCardText, setNewCardText] = useState("");
    const [newColor, setNewColor] = useState("");

    const handleToggleFavorite = () => {
        setFavoriteCard(!favoriteCard);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey && newCardText.trim() !== "") {
            const newCard = { text: newCardText, title: newTitle, favorite: favoriteCard, color: newColor };
            setCards((prevCards) => {
                if (favoriteCard) {
                    // Se é um card favorito, colocar no início do array
                    return [newCard, ...prevCards];
                } else {
                    return [...prevCards, newCard];
                }
            });
            setNewCardText("");
            setNewTitle("");
            setFavoriteCard(false);
            setNewColor("");
        }
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center bg-white shadow-2xl'>
                <div className='flex flex-row items-center justify-between border-b border-gray-300 p-4 w-96'>
                    <textarea
                        className='font-bold h-6 resize-none'
                        placeholder='Título'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleToggleFavorite}>
                        {favoriteCard ? (
                            <FaRegStar color="gold"/>
                        ) : (
                            <FaRegStar/>
                        )}
                    </button>
                </div>
                <div className='py-6 px-4 w-full'>
                    <textarea
                        className='w-full h-full p-2 resize-none break-words'
                        placeholder='Criar nota...'
                        value={newCardText}
                        onChange={(e) => setNewCardText(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4'>
                {cards.map((card, index) => (
                    <Card key={index} text={card.text} title={card.title} favorite={card.favorite} color={card.color}/>
                ))}
            </div>
        </div>
    );
}

export default NewCard;
