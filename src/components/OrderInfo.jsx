import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";
import OrderForm from "../components/OrderForm"

function OrderInfo(handler) {
    const [showButtonA, setShowButtonA] = useState(false);

    const ButtonHandleCloseA = () => setShowButtonA(false);
    const ButtonHandleShowA = () => setShowButtonA(true);

    const [buttonDisabled, setButtonDisabled] = useState(true);

    let message = ""
    let setMessage = (newMessage) => {
        message += newMessage;
        handler.tgMessage(message)
    }
    let buttonDisabler = (state) => {
        setButtonDisabled(state);
    }

    return (
        <>
            <Button onClick={ButtonHandleShowA} variant={"outline"} disabled={handler.buttonDisabled}
                    style={{marginLeft: "10px", marginRight: "10px", backgroundColor: "lightblue"}}>
                Далее
            </Button>
            <Offcanvas show={showButtonA} onHide={ButtonHandleCloseA} placement="end" name="OrderInfo">
                <Offcanvas.Header closeButton style={{backgroundColor: "#F7F7F7"}}>
                    <Offcanvas.Title>Order</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{paddingTop: 0, paddingBottom: 0, backgroundColor: "#F7F7F7"}}>
                    <OrderForm handler={setMessage} buttonDisabler={buttonDisabler}/>
                </Offcanvas.Body>
                <div className="UnderOrderArea">
                    <Button form="InputForm" type="submit" variant={"outline"} disabled={buttonDisabled}
                            style={{marginLeft: "10px", marginRight: "10px", backgroundColor: "lightblue"}}>
                        Оформить заказ
                    </Button>
                </div>
            </Offcanvas>
        </>
    );
}

export default OrderInfo;
