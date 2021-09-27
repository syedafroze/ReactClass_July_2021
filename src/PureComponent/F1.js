import React from 'react';

function F1(props){
    console.log("--renering")
    return <div>
        <h2>functional comp in pure comp</h2>
    </div>
}

export default React.memo(F1);

//memo - memoization ()