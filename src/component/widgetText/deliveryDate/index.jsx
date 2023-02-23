import { TextField } from '@shopify/polaris'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeSave, handleChangeTextDate } from '../../../redux/action';

const DeliveryDate = () => {
    const widgetTextDate = useSelector((state) => state.widgetTextDate);
    const dispatch = useDispatch();

    const handleChange = (value, key) => {
        dispatch(handleChangeTextDate({
            ...widgetTextDate,
            [key]: value
        }))
        dispatch(activeSave());
    };

    return (
        <div>
            <TextField
                label="Title"
                value={widgetTextDate.title}
                onChange={(value) => handleChange(value, "title")}
                autoComplete="off"
            />
            <TextField
                label="Delivery date label"
                value={widgetTextDate.deliDateLabel}
                onChange={(value) => handleChange(value, "deliDateLabel")}
                autoComplete="off"
            />
            <TextField
                label="Delivery date title"
                value={widgetTextDate.deliDateTitle}
                onChange={(value) => handleChange(value, "deliDateTitle")}
                autoComplete="off"
            />
            <TextField
                label="Delivery time title"
                value={widgetTextDate.deliTimeTitle}
                onChange={(value) => handleChange(value, "deliTimeTitle")}
                autoComplete="off"
            />
            <TextField
                label="Required message text"
                value={widgetTextDate.requiredMessage}
                onChange={(value) => handleChange(value, "requiredMessage")}
                autoComplete="off"
            />
        </div>
    )
}

export default DeliveryDate
