import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import RootRouter from '../router/RootRouter';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <HeaderSection />
                <Container text style={{ minHeight: 200, }}>
                    <RootRouter/>
                </Container>
                <FooterSection />
            </>
        )
    }
}