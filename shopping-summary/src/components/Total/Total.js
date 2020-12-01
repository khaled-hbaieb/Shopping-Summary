import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'

class Total extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={6}><h2>Total:</h2></Col>
                    <Col md={6}><h2>{`$${this.props.total}`}</h2></Col>
                </Row>
            </div>
        );
    }
}

export default Total;