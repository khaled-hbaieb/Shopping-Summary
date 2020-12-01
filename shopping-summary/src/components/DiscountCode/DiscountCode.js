import React, { Component } from 'react';
import { Button, Collapse, Form, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

class DiscountCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            value : '',
        }
    }
    render() {
        return (
            <div>
                <Button 
                className="Code-Button"
                bsStyle="link"
                onClick = {()=> this.setState({open:!this.state.open})} 
                >
                    {this.state.open === false ? `Apply` : `Hide`} Discount Code
                {this.state.open === false ? `+` : `-`}
                    </Button>
                    <Collapse in={this.state.open}>
                        <div>
                        <Row className="grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId="formInlineName">
                                        <FormLabel>Promo Code</FormLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter Promo Code"
                                            value={this.props.promoCode}
                                            onChange={this.handleChange}
                                        >
                                        </FormControl>
                                        <Button
                                        block
                                        bsStyle="success"
                                        className="btn-round"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                        >
                                        Apply
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                        </div>
                    </Collapse>
            </div>
        );
    }
}

export default DiscountCode;