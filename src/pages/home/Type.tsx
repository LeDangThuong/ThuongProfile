import React from 'react';
import { ReactTyped } from 'react-typed';

const Type: React.FC = () => {
    return (
        <div className='text-xl md:text-2xl font-semibold font-sans'>
            <ReactTyped
                strings={['MERN STACK DEVELOPER', 'JAVA BACKEND', 'UI/UX DESIGNER']}
                typeSpeed={50}
                backSpeed={50}
                loop
            />
        </div>
    );
};

export default Type;