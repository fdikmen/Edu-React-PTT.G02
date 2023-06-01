import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
    Container,
    Dropdown,
    Image,
    Menu,
} from 'semantic-ui-react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class HeaderSection extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    toggleTopMenu = (inView) => this.setState({ menuFixed: !inView })

    render() {
        const { menuFixed } = this.state

        return (
            <>
                <InView onChange={this.toggleTopMenu}>
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item as={Link} to="/">
                                <Image size='mini' src={logo} />
                            </Menu.Item>
                            <Menu.Item header as={Link} to="/">Movie App</Menu.Item>
                            <Menu.Item as={Link} to="/movie/add">Movie Add</Menu.Item>
                            <Menu.Item as={Link} to="/movie/list">Movie List</Menu.Item>
                            {/* <Link to="/movie/list">List</Link> */}
                        </Container>
                    </Menu>
                </InView>
            </>
        )
    }
}