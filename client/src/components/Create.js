import React from 'react';
import GeneralInfo from './creation/generalinfo';
import StatsCard from './creation/stats';

function Create({user}){

 


    return(
        <div>
            <h1>Create</h1>

            <GeneralInfo/>
            <StatsCard/>
        </div>
    )
}

export default Create;