import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";
import OrderForm from "../components/OrderForm"

function OrderInfo (handler) {
    const [showButtonA, setShowButtonA] = useState(false);

    const ButtonHandleCloseA = () => setShowButtonA(false);
    const ButtonHandleShowA = () => setShowButtonA(true);

    let message = ""
    let setMessage = (newMessage) =>{
        message+=newMessage;
        handler.tgMessage(message)
    }

    return (
        <>
            <Button onClick={ButtonHandleShowA} variant={"outline-primary"} style={{marginLeft:"10px", marginRight: "10px"}}>
                Next
            </Button>
            <Offcanvas show={showButtonA} onHide={ButtonHandleCloseA} placement="end" name="OrderInfo">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Order</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{paddingTop:0, paddingBottom: 0}}>
                    <OrderForm handler={setMessage}/>
                </Offcanvas.Body>
                <div className="UnderOrderArea">
                    <Button form="InputForm" type="submit" variant={"outline-primary"} style={{marginLeft:"10px", marginRight: "10px"}}>
                        Send
                    </Button>
                </div>
            </Offcanvas>
        </>
    );
}
export default OrderInfo;
