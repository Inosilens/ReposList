import React from 'react';

export const ListOfRepository=({data
})=> {
    return (
        <div>
            {
                data.map((item,index)=>
                    <div className="container" key={index}>
                        <h1>Repository name : {item.name}</h1>
                        <h3>ID : {item.id}</h3>
                    </div>)
            }
        </div>
    );
}

