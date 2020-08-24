import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import React from 'react';

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    ),
];
