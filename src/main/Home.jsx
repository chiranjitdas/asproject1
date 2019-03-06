import React, { Component } from 'react';
import {
    Row,
    Container
} from 'reactstrap';

import "../assets/css/rightside.css";

import ProductsView from "./components/ProductsView";
import FixedStoresView from "./components/FixedStoresView";

class Home extends Component {
    render() {
        return (
            <div>
                <main id="main">
                    <section id="main_container" className="wow fadeInUp">
                        <Container>
                            <Row>
                                <div className="col-lg-8 col-sm-12">
                                    <ProductsView />
                                </div>

                                <div className="col-lg-4 d-none d-md-block d-lg-block content">
                                    <FixedStoresView />
                                </div>
                            </Row>
                        </Container>
                    </section>
                </main>
            </div>
        );
    }
}
export default Home;