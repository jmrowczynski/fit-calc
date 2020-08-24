import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const Root = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Hello Jakub</h1>
    </ThemeProvider>
);

export default Root;
