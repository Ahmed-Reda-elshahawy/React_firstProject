import { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import ALERT from './Alert'

export default function CARD(props) {
    const [popup, setalert] = useState(false)
    const handleclick = () => { setalert(true) }

    const [count, setCout] = useState(0)
    const increase = () => { setCout(count + 1) }
    const decrease = () => { setCout(count - 1) }
    if (count < 0) { setCout(0) }
    return (
        <Container className='container-box'>
            <div>
                {popup && <ALERT />}
            </div>
            <Card>
                <Card.Img className='img-class' variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.cost}</Card.Title>
                    <Card.Text>{props.discription}</Card.Text>
                    <Button variant="danger" style={{ fontSize: "25px", paddingLeft: "20px", paddingRight: "20px" }} onClick={handleclick}>
                        Buy
                    </Button>
                    <Button onClick={increase} className='btn_increase' variant="primary" style={{ fontSize: "25px", paddingLeft: "20px", paddingRight: "20px" }}>
                        +
                    </Button>
                    <Button onClick={decrease} className='btn_decrease' variant="primary" style={{ fontSize: "25px", paddingLeft: "20px", paddingRight: "20px" }}>
                        -
                    </Button>
                    <span className='span_counter'>( {count} )</span>
                </Card.Body>
            </Card>
        </Container>
    )
}