import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log(`Pesquisando notas com termo: ${searchTerm}`);
    };

    return (
        <div className="flex items-center bg-white rounded-lg shadow-lg shadow-gray-300 w-96">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar notas..."
                className="flex-1 p-2 outline-none"
            />
            <button
                onClick={handleSearch}
                className="ml-2 p-2 text-gray-400 rounded focus:outline-none"
            >
                <FaSearch className="" />
            </button>
        </div>
    );
};

export default SearchBar;
