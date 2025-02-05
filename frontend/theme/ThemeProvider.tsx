'use client';

import React from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import { theme as themeConfig} from './theme';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme({...themeConfig});

  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
