import { Card, Collapsible, Icon, Stack, Tabs, Text } from '@shopify/polaris';
import { ChevronDownMinor, TextMajor } from '@shopify/polaris-icons';
import React, { useCallback, useState } from 'react'
import DeliveryDate from './deliveryDate';
import StorePickup from './storePickup';
import './widget-text.scss'

const WidgetText = () => {
    const [open, setOpen] = useState(true);
    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'all-customers-1',
            content: 'Delivery Date',
            accessibilityLabel: 'All customers',
            panelID: 'id1',
        },
        {
            id: 'accepts-marketing-1',
            content: 'Store Pickup',
            panelID: 'id2',
        },
    ];

    return (
        <div>
            <Card sectioned>
                <Stack vertical>
                    <div className='card-title'>
                        <Stack>
                            <Icon source={TextMajor} color="critical" />
                            <Text variant='headingLg' as='h6' color="critical">Widget text</Text>
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
                        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted >
                            <Card.Section>
                                {
                                    selected === 0 ? <DeliveryDate /> : <StorePickup />
                                }
                            </Card.Section>
                        </Tabs>
                    </Collapsible>
                </Stack>
            </Card>
        </div>
    )
}

export default WidgetText
