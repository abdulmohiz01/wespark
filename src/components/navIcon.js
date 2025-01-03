import React from 'react';

const NavIcon = ({ clicked }) => {
    return (
        <div className="flex w-[12px] h-auto gap-[2px] flex-wrap">
            {[...Array(9)].map((_, index) => (
                <div
                    key={index}
                    className={`w-[2px] h-[2px] bg-white box-border transition ease-in-out duration-300 ${
                        clicked && [1, 3, 5, 7].includes(index) ? 'opacity-0' : 'opacity-100'
                    }`}
                ></div>
            ))}
        </div>
    );
};

export default NavIcon;
