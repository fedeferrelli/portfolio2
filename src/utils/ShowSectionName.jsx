import React from 'react';
import  {Fade} from 'react-awesome-reveal';


function ShowSectionName({name}) {
    return (
        <div className="text-secondary text-4xl w-auto bg-primary h-full flex border-t-4 border-b-4 border-terciary p-8 px-24 animate-pulse m-auto
        ">
           { <Fade direction="down" duration="600">
            <h1 className="m-auto uppercase font-bold ">
                {name}
            </h1>
            </Fade>}
        </div>
    )
}

export default ShowSectionName
