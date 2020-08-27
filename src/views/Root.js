import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme as mainTheme } from 'theme/mainTheme';
import media from 'theme/media';
import AboutView from './AboutView';

const theme = { ...mainTheme, ...media };

const Root = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AboutView />
    </ThemeProvider>
);

export default Root;
