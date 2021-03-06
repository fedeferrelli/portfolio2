import React from 'react';
import  {Fade} from 'react-awesome-reveal';


function ShowSectionName({name}) {
    return (
        <div className="text-secondary text-4xl w-11/12 text-center sm:w-auto bg-primary h-full flex border-t-4 border-b-4 border-terciary p-8 sm:px-20 animate-pulse m-auto
        ">
           { <Fade direction="down" duration="600" className="w-full m-auto">
            <h1 className="m-auto uppercase font-bold">
                {name}
            </h1>
            </Fade>}
        </div>
    )
}

export default ShowSectionName
