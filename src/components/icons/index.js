import React from 'react';

function DeleteButton() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 19" fill="none">
            <path
                d="M2.45787 17.86C2.51882 18.52 3.06735 19 3.73778 19H14.2615C14.9319 19 15.4804 18.5 15.5414 17.86L16.7197 5.69995H1.27954L2.45787 17.86Z"
                fill="white"/>
            <path
                d="M16.7201 1.9H11.5801V1.26C11.5801 0.560001 11.0113 0 10.3002 0H7.72009C7.00903 0 6.44018 0.560001 6.44018 1.26V1.9H1.27991C0.568849 1.9 0 2.46 0 3.16C0 3.86001 0.568849 4.42001 1.27991 4.42001H16.7201C17.4312 4.42001 18 3.86001 18 3.16C18 2.46 17.4312 1.9 16.7201 1.9Z"
                fill="white"/>
        </svg>
    )
}

function CloseButton() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 28.8L19.2 16L32 3.2L28.8 0L16 12.8L3.2 0L0 3.2L12.8 16L0 28.8L3.2 32L16 19.2L28.8 32L32 28.8Z"
                  fill="white"/>
        </svg>
    )
}

export {DeleteButton, CloseButton};
