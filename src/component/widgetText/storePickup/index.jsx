import { TextField } from '@shopify/polaris'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeSave, handleChangeTextPickup } from '../../../redux/action';

const StorePickup = () => {
    const widgetTextPickup = useSelector((state) => state.widgetTextPickup);
    const dispatch = useDispatch();

    const handleChange = (value, key) => {
        dispatch(handleChangeTextPickup({
            ...widgetTextPickup,
            [key]: value
        }))
        dispatch(activeSave());
    };

    return (
        <div>
            <TextField
                label="Store pickup label"
                value={widgetTextPickup.title}
                onChange={(value) => handleChange(value, "title")}
                autoComplete="off"
            />
            <TextField
                label="Message text to require buyers to chooose a pickup location"
                value={widgetTextPickup.deliDateLabel}
                onChange={(value) => handleChange(value, "deliDateLabel")}
                autoComplete="off"
            />
            <TextField
                label="Store pickup date title"
                value={widgetTextPickup.deliDateTitle}
                onChange={(value) => handleChange(value, "deliDateTitle")}
                autoComplete="off"
            />
            <TextField
                label="Store pickup time title"
                value={widgetTextPickup.deliTimeTitle}
                onChange={(value) => handleChange(value, "deliTimeTitle")}
                autoComplete="off"
            />
            <TextField
                label="Required message text"
                value={widgetTextPickup.requiredMessage}
                onChange={(value) => handleChange(value, "requiredMessage")}
                autoComplete="off"
            />
        </div>
    )
}

export default StorePickup
