import * as React from 'react'
import { toast } from 'react-toastify';

let lastMessage = ''

export const notify = (success: boolean, message: string) => {
    if (message === lastMessage) {
        return
    }
    lastMessage = message
    if (success) {
        return toast.success(message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return toast.warning(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
} 