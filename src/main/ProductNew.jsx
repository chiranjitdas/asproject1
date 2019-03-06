import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

import "../assets/css/rightside.css";
//import ProductsView from "./components/ProductsView";
//import ProductDescription from "./components/ProductDescription";
import BreadcrumbSec from "./components/BreadcrumbSec";

class Product extends Component {
    render() {
        return (
            <div>
                <main id="main">
                    <section id="main_container" className="wow fadeInUp">
                <Container>
                    <div>
                        <Row>
                            <div className="col-12">
                                <BreadcrumbSec />
                            </div>
                            <div className="col-lg-7 col-sm-12">
                                <h1>Carousal</h1>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <h2 style={{ marginBottom: 5, fontWeight: 700}}>United Colors of Benetton</h2>
                                <h4 class="text-muted">Men Navy Blue Slim Fit Mid-Rise Clean Look Stretchable Jeans</h4>
                                <hr/>
                                <h2 style={{ marginBottom: 5, fontWeight: 700}}>Rs. 3999</h2>
                                <p class="text-muted" style={{ marginBottom: 15}}>Additional tax may apply; charged at checkout</p>
                                <h4>Select Size</h4>
                                <div className="round-buttons-tipAndBtnContainer">
                                    <button className="round-buttons-size-button round-buttons-size-button-default">
                                        <p className="buttons-unified-size">36</p>
                                    </button>
                                </div>
                                <div className="round-buttons-tipAndBtnContainer">
                                    <button className="round-buttons-size-button round-buttons-size-button-default">
                                        <p className="buttons-unified-size">38</p>
                                    </button>
                                </div>
                                <div className="round-buttons-tipAndBtnContainer">
                                    <button className="round-buttons-size-button round-buttons-size-button-default">
                                        <p className="buttons-unified-size">40</p>
                                    </button>
                                </div>
                                <div className="round-buttons-tipAndBtnContainer">
                                    <button className="round-buttons-size-button round-buttons-size-button-default">
                                        <p className="buttons-unified-size">42</p>
                                    </button>
                                </div>
                                <br/>
                                <button className="btn btn-success btn-lg btn-block has-text-weight-bold" style={{ marginTop: 15, marginBottom: 15 }}>+ ADD TO CART</button>
                                <hr/>
                                <h3>Product Details <i className="fa fa-align-justify"></i></h3>
                                <p className="text-justify ptext">
                                Black and grey checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem
                                </p>
                                <h5 style={{ marginTop: 10, marginBottom: 10}}>Material & Care</h5>
                                <p className="text-justify ptext">
                                Cotton<br/>Machine-wash
                                </p>
                                
                            </div>
                            
                        </Row>
                        <hr/>
                        <Row>
                            <div className="col-12">
                            <h3>SIMILAR PRODUCTS</h3>

                            </div>
                        </Row>
                        <hr/>
                        <Row>
                            <div className="col-12">
                            <h3>MORE PRODUCTS FROM THIS STORE</h3>

                            </div>
                        </Row>
                        </div>
                </Container>
                </section>
                </main>
            </div>
        );
    }
}
export default Product;