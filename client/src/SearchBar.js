import React, { useState } from "react";

function SearchBar(setSearch) {
    return (
       <div>
           <form>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Filter by name..."
                />
           </form>
       </div>
    );
}

export default SearchBar;
