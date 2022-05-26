import React from 'react';
import  {Fade} from 'react-awesome-reveal'

function ShowSectionName({name}) {
    return (
        <div className="text-secondary text-4xl w-full bg-primary h-full flex border border-terciary p-8 px-12 animate-pulse
        ">
           { <Fade direction="down" duration="1000">
            <h1 className="m-auto uppercase font-bold ">
                {name}
            </h1>
            </Fade>}
        </div>
    )
}

export default ShowSectionName
