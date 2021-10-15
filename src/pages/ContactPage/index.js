import { Component } from "react";
import { Button } from "../../components/General/Button";
import "./style.css";

export class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: {},
        };
    }
    render() {
        return (
            <div className="Contact">
                <p>Contact</p>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your City" />
                <input type="text" placeholder="Your Street" />
                <Button name="Purchase" />
            </div>
        );
    }
}
