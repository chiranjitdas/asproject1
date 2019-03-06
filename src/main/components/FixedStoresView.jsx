import React from 'react';
import { Row } from 'reactstrap';

import "../../assets/css/rightside.css";
import store_logo from "../../storage/test/logo2.png";

export default class FixedStoresView extends React.Component {
    render() {
        return (
        <div className="card">
            <div className="card-body" style={{ padding: 12 }}>
                <h5 className="card-title" style={{ marginBottom: 36 }}><span className="pull-left">Stores</span><a href="#!" style={{ fontSize: 16 }} className="pull-right">View All</a></h5>
                <div className="sidebar_overflow">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Row>
                                <div className="col-xs-12 col-sm-3 sidebar_overflow_img">
                                    <img src={store_logo} alt="Scott Stevens" className="img-responsive img-circle" />
                                </div>
                                <div className="col-xs-12 col-sm-9 sidebar_overflow_text">
                                    <h4>Temptation</h4>
                                    <h6>Rajgarh Road, Near ByeLane...</h6>
                                    <button className="btn btn-sm btn-4 btn-outline-warning">Follow</button>
                                </div>
                            </Row>
                        </li>
                    </ul>

                </div>
                <div className="text-center mt-3">
                    <a href="#!"><h5>Become Our Partner <i className="fa fa-arrow-right"></i></h5></a>
                </div>

            </div>
        </div>
        );
    }
}