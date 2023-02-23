const initState = {
    displaySave: false,
    widgetPositoin: {
        showTheCalendar: false,
        requireTheDelivery: false
    },
    widgetAppearance: {
        layout: "today",
        calendarLayout: "Calendar layout",
        calendarLanguage: "Iceland",
        calendartFirstDay: "Monday",
        dateFormat: "",
        themeColor: "#000000",
        titleColor: "#b11b1b",
        textColorMessage: "#3d8e1a"
    },
    widgetTextDate: {
        title: "Select a delivery date",
        deliDateLabel: "Delivery Date",
        deliDateTitle: "Delivery Date",
        deliTimeTitle: "Delivery Date",
        requiredMessage: "Henry Nguyen"
    },
    widgetTextPickup: {
        title: "Store Pickup",
        deliDateLabel: "Choose the storage to pickup your product(s)",
        deliDateTitle: "Delivery Date",
        deliTimeTitle: "Pickup location",
        requiredMessage: "Please select pickup date before checkout"
    }
}

const rootReducer = (state = initState, action) => {
    // console.log({ state, action })
    switch (action.type) {
        case "TOGGLE_DISPLAY":
            return {
                ...state,
                displaySave: true
            }
        case "TOGGLE_HIDDEN":
            return {
                ...state = initState,
                displaySave: false
            }

        case "CHANGE_POSITION":
            return {
                ...state,
                widgetPositoin: action.payload
            }
        case "CHANGE_APPEARANCE":
            return {
                ...state,
                widgetAppearance: action.payload
            }
        case "CHANGE_TEXT_DATE":
            return {
                ...state,
                widgetTextDate: action.payload
            }
        case "CHANGE_TEXT_PICKUP":
            return {
                ...state,
                widgetTextPickup: action.payload
            }

        default:
            return state
    }
}

export default rootReducer;