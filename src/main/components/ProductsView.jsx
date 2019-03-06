import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions/actions';
import Likesshare from './Likesshare';

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

class ProductsView extends React.Component {
    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.loadProducts()
    }
    render() {
       // const products = 
        return (
            <div>
                <Row>
                {
                    this.props.products.reverse().map((product) => (
                    <div className="col-lg-6 col-sm-12" style={{ paddingRight: 3, paddingLeft: 3 }}>
                    <div className="box wow fadeInLeft">
                        <div className="Instagram-card-header">
                            <Row>
                                <div className="col-2">
                                    <img src="/storage/test/logo2.png" alt="Logo" className="Instagram-card-user-image" />
                                </div>
                                <div className="col-7">
                                    <a className="Instagram-card-user-name" href="https://www.instagram.com/innovativecodex/"> Dropclothings<span className="text-muted"><br />Beltola, Guwahati..</span></a>

                                </div>
                                <div className="col-3">
                                    <div className="Instagram-card-time"><button className="btn btn-sm btn-4 btn-outline-warning">Follow</button></div>
                                </div>
                            </Row>
                        </div>

                        <div className="Instagram-card-image">
                            <img className="img-fluid mx-auto d-block" alt="img" src={'/storage/test/' + product.images[0].a} style={{ height: 326 }} />
                        </div>

                        <div className="Instagram-card-content">
                            <Row>
                                <div className="col-4 text-center">
                                    <Likesshare totallikes={product.claps} product_id={product._id} />
                                    
                                </div>
                                <div className="col-3 text-center pricetagcol" style={{ paddingRight: 3, paddingLeft: 3 }} >
                                    <span className="pricetag text-warning">Rs. {product.regular_price}</span><br /><del className="text-muted">Rs. 250</del>
                                </div>
                                <div className="col-5 text-center">
                                    <img src="/img/scooter2.png" alt="Logo" className="pngicons" />Delivery<br /><span className="font-weight-bold">30-40 mins</span><br />
                                    <Link to={"/product/" + product.slug + "/" + product.product_code} className="btn btn-sm btn-4 btn-outline-warning">Add to Cart</Link>
                                </div>
                            </Row>
                            <hr />
                            <p><a className="Instagram-card-content-user" href={"/api/product/" + product.slug + "/" + product.product_code}>Dropsocietyclub </a> {product.name}</p>
                        </div>
                        <div className="Instagram-card-footer">
                            <span className="text-muted"><i className="fa fa-clock-o"></i> 3 hours ago</span>
                        </div>
                    </div>
                </div>
                ))
                }
                </Row>
            </div>
        );
    }
}
export default connect(mapStateToProps, { loadProducts })(ProductsView);