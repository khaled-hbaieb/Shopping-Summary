import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'

class Taxes extends Component {
    render() {
        return (
            <div>
                <Row className="grid">
                    <Col md={6}>Taxes & Fees</Col>
                    <Col md={6}>{`$${this.props.taxes}`}</Col>
                </Row>
            </div>
        );
    }
}

export default Taxes;