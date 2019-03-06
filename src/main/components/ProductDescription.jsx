import React from 'react';
import {  Row } from 'reactstrap';
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions/actions';
//import Likesshare from './Likesshare';

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

class ProductDescription extends React.Component {
    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.loadProducts()
    }
    render() {
        const products = this.props.products.reverse().map((product) =>


                <div className="box">
                    
                </div>
        )
        return (
            <div>
                <Row>
                    {products}
                </Row>
            </div>
        );
    }
}
export default connect(mapStateToProps, { loadProducts })(ProductDescription);