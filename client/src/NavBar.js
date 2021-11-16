import React from 'react';
import SearchBar from './SearchBar';

function NavBar({setSearch}) {
    return (
        <div>
            <nav>
                <button> Home </button>
                <SearchBar setSearch={setSearch}/>
                <button>Log in</button>
                <button>Sign up</button>
            </nav>
        </div>
    );
}

export default NavBar;
