import React, { useState } from 'react'
import { Frame, ContextualSaveBar } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { discardSave } from '../../redux/action';

const Contextual = () => {
    const dispatch = useDispatch()
    const allValue = useSelector(state => state);

    const { widgetPositoin, widgetAppearance, widgetTextDate, widgetTextPickup } = allValue;

    const [text, setText] = useState('Unsaved changes');
    return (
        <div style={{ height: '50px' }}>
            <Frame>
                <ContextualSaveBar
                    alignContentFlush
                    message={text}
                    saveAction={{
                        onAction: () => {
                            setText("Saved Changes");
                            console.log({ widgetPositoin, widgetAppearance, widgetTextDate, widgetTextPickup });
                        },
                    }}
                    discardAction={{
                        onAction: () => {
                            dispatch(discardSave())
                        },
                    }}
                />
            </Frame>
        </div>
    )
}

export default Contextual
