import './GroupDetailsCentral.css'
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const GroupDetailsCentral = () => {
    
    const groups = useSelector(state => state.entities.groups);
    const {groupId} = useParams();
    const group = groups[groupId];

    if (!group) return null
    

    return (
        <div className="group-details-central">
            {group.group_photo_url && (
                <img src={group.group_photo_url} id='group-photo' alt={`Group: ${group.name}`} />
            )}
            <h2>{group.name}</h2>
        </div>
    );
};

export default GroupDetailsCentral;

