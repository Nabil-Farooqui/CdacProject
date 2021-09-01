import React,{Component} from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavbarComp extends Component{
    render(){
        return(
            <div>
               <Navbar bg="info" variant="light" expand="lg">
                <Container >
                    <Navbar.Brand href="/home" >Vehicle Management System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto font-20px">
                            <Link className="list-group-item list-group-item-action"  to="/home" action> Home</Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/approve" action> Approve</Link>
                            <Link  className="list-group-item list-group-item-action" to="/contact" tag="a" action > ContactUs</Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/about" action > AboutUs</Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/approverequest" action> Request</Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/makearequest" action> MakeRequest</Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/totalcustomer" action> TotalCustomers</Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/viewfeedback" action> ViewFeedback</Link>
                        </Nav>
                        <Nav className="justify-content-end" activeKey>
                            <Link to = "Login" className = "btn btn-primary">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComp;