import NewCard from "../components/NewCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Logo from '../assets/logo.svg';
import { FaTimes } from 'react-icons/fa';

function Main() {
    return (
        <div className='flex flex-col items-center h-full min-h-screen bg-gray-100'>
            <div className='flex flex-row items-center justify-between bg-white w-full p-5'>
                <div className='flex flex-row items-center'>
                    <img src={Logo} alt="Logo" className='w-8 h-8 mr-4'/>
                    <SearchBar/>
                </div>
                <div>
                    <FaTimes/>
                </div>
            </div>
            <div className='p-10'>
                <NewCard/>
            </div>
        </div>
    );
}

export default Main;
