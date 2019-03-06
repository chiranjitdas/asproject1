import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

import "../assets/css/rightside.css";
import ProductsView from "./components/ProductsView";
import ProductDescription from "./components/ProductDescription";

class Product extends Component {
    render() {
        return (
            <div>
                <main id="main">
                    <section id="main_container">
                        <Container>
                            <Row>
                                <div className="col-lg-8 col-sm-12">
                                    <ProductsView />
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <ProductDescription />
                                </div>
                            </Row>
                        </Container>
                    </section>
                </main>
            </div>
        );
    }
}
export default Product;