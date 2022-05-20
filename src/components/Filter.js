import React from "react";

const Filter = ({ onCategoryChange }) => {
    return (
        <div>
            <select onChange={onCategoryChange}></select>
        </div>
    )
}

export default Filter