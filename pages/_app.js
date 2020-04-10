import React from 'react';
import App, {Container} from 'next/app';
import Template from './template';

class micropAdmin extends App {
    render(){
        const {Component, pageProps} = this.props;

        return(
            <Template>
                <Component {...pageProps}></Component>
            </Template>
        )
    }
};

export default micropAdmin;
