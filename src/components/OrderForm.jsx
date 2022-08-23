import React, {useState} from "react";

const OrderForm = (props) => {
    const initialValues = {
        phone: "",
        name: "",
        address: "",
        entrance: "",
        apNumber: "",
        intercomNumber: "",
        comment: ""
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        props.handler("Person:%0a"+values.phone+"%20"+values.name+"%0a"+values.address+"%20"+values.entrance+"%20"+
            values.apNumber+"%20"+values.intercomNumber+"%0a"+values.comment+"%0a%0a")
        e.preventDefault()
    }
    return (
        <div className="OrderInfoInput">
            <form id="InputForm" onSubmit={handleSubmit}>
            <div>
                <label> Кому доставляем? </label>
                <input value={values.phone} name="phone" onChange={handleInputChange} style={{width: "100%"}}/>
                <input value={values.name} name="name" onChange={handleInputChange} style={{width: "100%"}}/>
                <label> Куда доставляем? </label>
                <input value={values.address} name="address" onChange={handleInputChange} style={{width: "100%"}}/>
            </div>
            <div className="LeftRightFlex">
                <input value={values.entrance} name="entrance" onChange={handleInputChange} style={{width:"80px"}}/>
                <input value={values.apNumber} name="apNumber" onChange={handleInputChange} style={{width:"80px"}}/>
                <input value={values.intercomNumber} name="intercomNumber" onChange={handleInputChange} style={{width:"80px"}}/>
            </div>
            <textarea value={values.comment} name="comment" onChange={handleInputChange} style={{width: "100%"}}/>
            </form>
        </div>
    );
};
export default OrderForm;
