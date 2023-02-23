export const activeSave = () => {
    return {
        type: 'TOGGLE_DISPLAY',
    }
}

export const discardSave = () => {
    return {
        type: 'TOGGLE_HIDDEN',
    }
}

export const handleChangePosition = (data) => {
    return {
        type: 'CHANGE_POSITION',
        payload: data
    }
}

export const handleChangeAppearance = (data) => {
    return {
        type: 'CHANGE_APPEARANCE',
        payload: data
    }
}
export const handleChangeTextDate = (data) => {
    return {
        type: 'CHANGE_TEXT_DATE',
        payload: data
    }
}
export const handleChangeTextPickup = (data) => {
    return {
        type: 'CHANGE_TEXT_PICKUP',
        payload: data
    }
}

