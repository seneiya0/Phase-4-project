import React from 'react';
import SearchBar from './SearchBar';

function NavBar(setSearch) {
    return (
       <div>
           <button> Home </button>
           <SearchBar setSearch={setSearch}/>
           <button>Log in</button>
           <button>Sign up</button>
       </div>
    );
}

export default NavBar;
