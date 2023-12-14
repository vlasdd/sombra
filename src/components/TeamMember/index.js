import React, { useState } from 'react';
import './index.css';

const TeamMember = ({ name, surname, position, photoUrl, color }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const dynamicStyle = {
        color: color || 'black',
    };

    const handleCardClick = () => {
        setIsFullscreen(!isFullscreen);
    };
    const cardClassName = `worker-info border p-3 bg-gray-100  m-2${isFullscreen ? ' fullscreen' : ''}`;

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            <div className="name-surname">
                <p className={"Name"}>{name} {surname}</p>
            </div>
            <div className="photo mt-2">
                <img src={photoUrl} alt={`${name} ${surname}`} />
            </div>
            <div className='flex gap-1 items-center'>
                <div className={`rounded-[50%] w-3 h-3`} style={{ background: color }} />
                <p className={"position"} style={dynamicStyle}>{position}</p>
            </div>
        </div>
    );
};

export default TeamMember;