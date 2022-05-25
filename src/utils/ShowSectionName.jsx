import React from 'react'

function ShowSectionName({name}) {
    return (
        <div className="text-secondary text-4xl w-full bg-primary h-full flex border border-terciary p-8 px-12 animate-pulse
        ">
            <h1 className="m-auto uppercase font-bold ">
                {name}
            </h1>
            
        </div>
    )
}

export default ShowSectionName
