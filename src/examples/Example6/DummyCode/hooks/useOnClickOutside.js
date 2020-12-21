import  { useEffect } from "react";

export function useOnClickOutside(ref, callback) {
    useEffect(() => {
        const eventListener = e => {
            // don't do anything if clicking on the ref element or it's children
            if(!ref.current || ref.current.contains(e.target)) {
                return;
            }

            callback(e)
        }

        document.addEventListener('mousedown', eventListener);

        return() => {
            document.removeEventListener('mousedown', eventListener)
        }
    }, [ref, callback])
}