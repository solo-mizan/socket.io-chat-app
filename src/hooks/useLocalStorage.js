import React, { useEffect, useState } from 'react'

const PREFIX = 'whatsapp-clone';

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }
    })
    return (
        <div>

        </div>
    )
}
