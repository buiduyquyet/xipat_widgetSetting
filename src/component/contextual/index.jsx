import React from 'react'
import { Frame, ContextualSaveBar } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { discardSave } from '../../redux/action';

const Contextual = () => {
    const dispatch = useDispatch()
    const allValue = useSelector(state => state);
    return (
        <div style={{ height: '50px' }}>
            <Frame>
                <ContextualSaveBar
                    alignContentFlush
                    message="Unsaved changes"
                    saveAction={{
                        onAction: () => {
                            console.log(allValue);
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
