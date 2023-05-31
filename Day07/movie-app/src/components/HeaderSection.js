import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
    Container,
    Dropdown,
    Image,
    Menu,
} from 'semantic-ui-react'
import logo from '../logo.svg';

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
                            <Menu.Item>
                                <Image size='mini' src={logo} />
                            </Menu.Item>
                            <Menu.Item header>Project Name</Menu.Item>
                            <Menu.Item as='a'>Blog</Menu.Item>
                            <Menu.Item as='a'>Articles</Menu.Item>

                            <Menu.Menu position='right'>
                                <Dropdown text='Dropdown' pointing className='link item'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Header>Header Item</Dropdown.Header>
                                        <Dropdown.Item>
                                            <i className='dropdown icon' />
                                            <span className='text'>Submenu</span>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>List Item</Dropdown.Item>
                                                <Dropdown.Item>List Item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </InView>
            </>
        )
    }
}