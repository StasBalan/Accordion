import { version, Component } from 'inferno';
import './App.css';
import Button from "inferno-bootstrap/src/Button";
import Collapse from "inferno-bootstrap/src/Collapse";
import CardBody from "inferno-bootstrap/src/Card/CardBody";
import Card from 'inferno-bootstrap/src/Card/Card';

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.doToggle = this.doToggle.bind(this);
    }

    doToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let { title, paragraph } = this.props;
        return (
            <div className='ey'>
                <Button onClick={this.doToggle}>{`${title} ${!this.state.isOpen ?'+':'-'}`}</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Card>
                        <CardBody>
                            <p>{paragraph}</p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default CardComponent;