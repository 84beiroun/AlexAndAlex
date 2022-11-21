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
        buttonDisablerHandler();
    };

    let buttonDisablerHandler = () => {
        if (values.phone.length > 0 && values.address.length > 0 && values.apNumber.length > 0)
            props.buttonDisabler(false);
        else
            props.buttonDisabler(true);
    }

    const handleSubmit = (e) => {
        props.handler("Person:%0a" + values.phone + "%20" + values.name + "%0a" + values.address + "%20" + values.entrance + "%20" +
            values.apNumber + "%20" + values.intercomNumber + "%0a" + values.comment + "%0a%0a")
        e.preventDefault()
    }
    return (
        <div className="OrderInfoInput">
            <form id="InputForm" onSubmit={handleSubmit}>
                <div style={{marginBottom: 0}}>
                    <label className="InputLabel"> Кому доставляем? </label>
                    <input placeholder="Введите номер телефона*" className="FormInput" value={values.phone} name="phone"
                           onChange={handleInputChange} style={{width: "100%"}}/>
                    <input placeholder="Как к вам обращаться?" className="FormInput" value={values.name} name="name"
                           onChange={handleInputChange} style={{width: "100%"}}/>
                    <label className="InputLabel" style={{marginTop: "30px"}}> Куда доставляем? </label>
                    <input placeholder="Введите улицу и номер дома*" className="FormInput" value={values.address}
                           name="address" onChange={handleInputChange} style={{width: "100%"}}/>
                </div>
                <div className="LeftRightFlex" style={{marginBottom: 0}}>
                    <input placeholder="Подъезд" value={values.entrance} name="entrance" onChange={handleInputChange}
                           style={{width: "32%"}}/>

                    <input placeholder="Квартира*" value={values.apNumber} name="apNumber" onChange={handleInputChange}
                           style={{width: "32%"}}/>
                    <input placeholder="Домофон" value={values.intercomNumber} name="intercomNumber"
                           onChange={handleInputChange}
                           style={{width: "32%"}}/>
                </div>
                <textarea placeholder="Комментарий" id="commentTextArea" value={values.comment} name="comment"
                          onChange={handleInputChange} style={{width: "100%", height: "80px"}}/>
            </form>
        </div>
    );
};
export default OrderForm;
