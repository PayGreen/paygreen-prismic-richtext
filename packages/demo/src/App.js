import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Prismic from 'prismic-javascript';
import { RichText } from '@paygreen-richtext/core';
import { ThemeDefault, Button } from '@paygreen/paygreen-ui';
import { ThemeProvider as PGThemeProvider } from 'styled-components';


function App() {
    const [doc, setDocData] = useState(null);

    useEffect(() => {
        const apiEndpoint = 'https://paygreen-io.prismic.io/api/v2';
        const accessToken =
            'MC5YZHY1NVJFQUFFZGJHQWZH.77-9Cu-_ve-_ve-_vQjvv73vv707S--_vQcUZO-_ve-_vQrvv73vv707ee-_vVJD77-9ce-_ve-_ve-_vUXvv73vv70';
        const Client = Prismic.client(apiEndpoint, { accessToken });
        const uid = 'third-party-cookies-informations';

        Client.getByUID('page', uid).then((data) => {
            const text = data.data.body[0].primary['content-text'];
            setDocData(text);
        });
    }, []);
    console.log(ThemeDefault);

    return (
        <div>
            <PGThemeProvider theme={ThemeDefault}>
                <Button>coucou</Button>
                {doc ? RichText.render(doc) : null}
            </PGThemeProvider>
        </div>
    );
}

export default App;
