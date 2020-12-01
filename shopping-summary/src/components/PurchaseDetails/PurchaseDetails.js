import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col} from 'react-bootstrap'
import './index.css'

class PurchaseDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    render() {
        return (
            <div>
                <Button className="item-button"
                bsStyle="link"
                onClick={() => this.setState({ open: !this.state.open })}
                >
                {this.state.open === false ? `See` : `Hide`} item details
                {this.state.open === false ? `+` : `-`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                            <Media>
                                <img src='https://images-na.ssl-images-amazon.com/images/I/51kzvp6xo4L._AC_SX522_.jpg'
                                width={100}
                                height={100}
                                alt="Product Image"
                                />
                                <Media.Body>
                                    <p>The most Epic Gaming chair red ever!</p>
                                    <Row className="grid">
                                        <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong><br />
                                        <strong className="price">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>Quantity: 1</Col>
                                    </Row>
                                </Media.Body>
                                </Media>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default PurchaseDetails;