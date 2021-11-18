import React from "react";

function SearchBar({setSearch}) {
    return (
        <div>
            <form>
                <input 
                    className="searchbar"
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Filter by name..."
                />
            </form>
        </div>
    );
}

export default SearchBar;
