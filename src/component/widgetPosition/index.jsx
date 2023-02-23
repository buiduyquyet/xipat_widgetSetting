import { Card, Checkbox, Collapsible, Icon, Stack, Text } from '@shopify/polaris'
import {
    ChevronDownMinor,
    IconsMajor
} from '@shopify/polaris-icons';
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeSave, handleChangePosition } from '../../redux/action';
import './widget-position.scss'

const WidgetPosition = () => {
    const widgetPositoin = useSelector((state) => state.widgetPositoin)
    const dispatch = useDispatch();

    const handleChange = (value, key) => {
        dispatch(handleChangePosition({
            ...widgetPositoin,
            [key]: value
        }))
        dispatch(activeSave());
    };

    const [open, setOpen] = useState(true);
    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    return (
        <div>
            <Card sectioned>
                <Stack vertical>
                    <div className='card-title'>
                        <Stack className='card-title__content'>
                            <Icon source={IconsMajor} color="critical" />
                            <Text variant='headingLg' color='critical' as='h6'>Widget position</Text>
                        </Stack>
                        <p onClick={handleToggle}>
                            <Icon source={ChevronDownMinor} color="critical" />
                        </p>
                    </div>

                    <Collapsible
                        open={open}
                        id="basic-collapsible"
                        transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                        expandOnPrint
                    >
                        <div>
                            <Checkbox
                                label="Show the calendar at the product page"
                                checked={widgetPositoin.showTheCalendar}
                                onChange={() => handleChange(!widgetPositoin.showTheCalendar, "showTheCalendar")}
                            />
                        </div>
                        <div>
                            <Checkbox
                                label="Require the delivery date before checkout"
                                checked={widgetPositoin.requireTheDelivery}
                                onChange={() => handleChange(!widgetPositoin.requireTheDelivery, "requireTheDelivery")}
                            />
                        </div>
                    </Collapsible>
                </Stack>
            </Card>
        </div>
    )
}

export default WidgetPosition
