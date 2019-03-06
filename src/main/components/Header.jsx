import React from 'react';
import {
    Nav,
    Row,
    Col,
    Container
} from 'reactstrap';
import '../../assets/css/main.css';
export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header id="header" className="fixed-top">
                <Container>
                    <Row>
                        <Col>
                            <div id="logo" className="pull-left">
                                <a href="/"><img src="/img/logo_sm.png" alt="Shofast" /></a>
                            </div>
                        </Col>
                        <Col>
                            <Nav id="nav-menu-container">
                                <ul className="nav-menu">
                                    <li className="d-none d-md-block"><a href="/"><i className="fa fa-home fa-2x"></i></a></li>
                                    <li><a href="/my-cart"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><span className="d-none d-md-block"></span> Cart</a></li>
                                    <li className="menu-has-children"><a href="/"><i className="fa fa-user fa-2x"></i><span className="d-none d-md-block"></span></a>
                                        <ul>
                                            <li><a href="/">Profile</a></li>
                                            <li><a href="/">Orders</a></li>
                                            <li><a href="/">Favourites</a></li>
                                            <li><a href="/">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}