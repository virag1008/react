import React, { useState,} from 'react'
import useCustomhook from './useCustomhook';

function DocTitleOne() {
    const [count, setcount] = useState(0);

    useCustomhook(count);

  return (
    <div>
       <button onClick={() => setcount(count+1)} >count:- {count}</button>
    </div>
  )
}

export default DocTitleOne;
