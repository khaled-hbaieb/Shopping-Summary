import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './index.css'

class Savings extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
            <p>If you pick up a savings, you will help cut down the costs of your purchase.</p>
        </Tooltip>
        )
        return (
            <div>
                <Row className='grid'>
                    <Col md={6}>
                    <OverlayTrigger placement='buttom' overlay={tooltip}>
                        <div id='savingsPickUp'>Pickup Savings</div>
                    </OverlayTrigger>
                    </Col>
                    <Col md={6} id='totalSavings'>
                        {`$${this.props.price}`}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Savings;