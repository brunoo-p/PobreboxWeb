import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        blue: '#0652DD',
        primaryColor: '#273c75',
        secondaryColor: '#ffeaa7',
        tertiaryColor: '#f5f6fa',
        quaternaryColor: '#222',
        borderColor: '#bdc4c9'

    },
    font: {
        fontFamily: 'Roboto, Sans Serif',
        color: 'rgba(47, 54, 64,1.0)'
    },

};

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;