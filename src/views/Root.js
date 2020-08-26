import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import AboutView from './AboutView';

const Root = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AboutView />
    </ThemeProvider>
);

export default Root;
