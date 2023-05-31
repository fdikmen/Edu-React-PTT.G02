import React, { Component } from 'react'
import {Container,Header} from 'semantic-ui-react'
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <HeaderSection />
                <Container text style={{minHeight: 200,}}>
                    <Header as='h1'>Semantic UI React Fixed Template</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                </Container>
                <FooterSection />
            </>
        )
    }
}