import React, {useEffect} from 'react'

function useCustomhook(count) {
    useEffect ( () => {
        document.title = `count ${count}`
    },[count])
}

export default useCustomhook
