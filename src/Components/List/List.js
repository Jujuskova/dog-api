import React from 'react';
import Breed from '../Breed/Breed';

const List = ({getBreeds}) => {
    
        return (
            <div>
                
                {getBreeds.map( (breed, idx) => {
                    return (
                        <div key={idx}> 
                            <Breed breed={breed}/>
                        </div>
                    )
                })}
                


            </div>
        )
    }


export default List;