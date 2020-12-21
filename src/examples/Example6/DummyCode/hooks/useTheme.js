import {useLayoutEffect} from 'react'

export function useTheme(theme) {
    useLayoutEffect(
      () => {
        for (const key in theme) {
          document.documentElement.style.setProperty(`--${key}`, theme[key]);
        }
      },
      [theme] 
    );
  }