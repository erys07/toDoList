import { FaRegStar, FaPen, FaBrush, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

interface CardProps {
    title: string;
    text: string;
    favorite: boolean;
    color: string;
}

const colorOptions = [
    '#ff9999', '#99ff99', '#9999ff', '#ffcc00', '#cc66ff', '#66ccff',
    '#ff6666', '#66ff66', '#6666ff', '#ffcc99', '#cc99ff', '#99ccff'
];

function Card({ text, title, favorite }: CardProps) {
    const [close, setClose] = useState(false);
    const [openColorPicker, setOpenColorPicker] = useState(false)
    const [selectedColor, setSelectedColor] = useState<string>('#ffffff');
    const [editText, setEditText] = useState(false  )
    const [editedText, setEditedText] = useState(text);

    const handleDeleteCard = (): void => {
        setClose(true);
    };

    const handleOpenColorPicker = (): void => {
        setOpenColorPicker(!openColorPicker);
    };

    const handleColorClick = (color: string): void => {
        setSelectedColor(color);
    };

    const handleEditText = (): void => {
        setEditText(!editText);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setEditedText(e.target.value);
    };

    return close ? null : (
        <div className='flex flex-col justify-between shadow-2xl rounded-3xl h-96 m-10' style={{ backgroundColor: selectedColor }}>
            <div>
                <div className='flex flex-row items-center justify-between border-b border-gray-300 p-4'>
                    <a className='font-bold'>{title}</a>
                    <FaRegStar color={favorite ? "gold" : "black"}/>
                </div>
                <div className='p-6 w-96 break-words'>
                    {editText ? (
                        <textarea
                            className='w-full h-full p-2 resize-none break-words bg-transparent border border-black'
                            value={editedText}
                            onChange={handleTextChange}
                        />
                    ) : (
                        <a className='' onClick={handleEditText}>{editedText}</a>
                    )}
                </div>
            </div>
            <div className='flex flex-row items-end justify-between p-4 bottom-0'>
                <div className='flex flex-row items-center justify-between w-14'>
                    <div className={`cursor-pointer ${editText ? 'p-1 bg-yellow-200 rounded-3xl' : ''}`}>
                        <FaPen onClick={handleEditText} className='cursor-pointer' />
                    </div>
                    <FaBrush onClick={handleOpenColorPicker} className='cursor-pointer'/>
                    {openColorPicker && (
                        <div className='flex absolute items-center justify-between p-2 mt-20 shadow-2xl rounded-lg bg-white border border-gray-200'>
                            {colorOptions.map((color, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleColorClick(color)}
                                    className='cursor-pointer flex items-center justify-center'
                                >
                <span
                    className='w-6 h-6 rounded-full m-1'
                    style={{background:`${color}` }}
                />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <FaTimes onClick={handleDeleteCard} className='cursor-pointer hover:text-red-600'/>
            </div>
        </div>
    );
}

export default Card;