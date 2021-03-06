import React from 'react';
import Story from './Story';

const Stories = ({stories}) => {

    return (
        <div>
         { stories && stories.map(story => {
             return (
                <Story story={story} key={story.id} />
             )
         })}
        </div> 
    );
}

export default Stories;
