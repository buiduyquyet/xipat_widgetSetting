import { Card, Checkbox, Collapsible, ColorPicker, DatePicker, Grid, Icon, Select, Stack, Text, TextField } from '@shopify/polaris';
import { ChevronDownMinor, PaintBrushMajor } from '@shopify/polaris-icons';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeSave, handleChangeAppearance } from '../../redux/action';
import './widget-appearance.scss'

const WidgetAppearance = () => {
    const [dataApi, setDataApi] = useState([]);
    const [checked, setChecked] = useState(false);
    const widgetAppearance = useSelector((state) => state.widgetAppearance);
    const dispatch = useDispatch();

    const handleChange = (value, key) => {
        dispatch(handleChangeAppearance({
            ...widgetAppearance,
            [key]: value
        }))
        dispatch(activeSave())
    }

    const handleCheckAlwaysCalendar = useCallback((newChecked) => {
        setChecked(newChecked);
        newChecked === true ? handleChange("Calendar", "calendarLayout") : handleChange("Date List", "calendarLayout")
    }, []);


    const optionsLayout = [
        { label: "Default", value: "Default" },
        { label: "Not Default", value: "Not Default" }
    ];
    const optionsDelivery = [
        { label: "Date List", value: "Date List" },
        { label: "Calendar", value: "Calendar" },
    ];
    const optionsFirstDay = [
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thusday", value: "Thusday" },
        { label: "Friday", value: "Friday" },
        { label: "Saturday", value: "Saturday" },
        { label: "Sunday", value: "Sunday" },
    ];
    const optionsLanguage = [];
    const optionsDate = [];

    const [open, setOpen] = useState(true);
    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://restcountries.com/v3.1/all');
                setDataApi(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [])
    dataApi.forEach(element => {
        optionsLanguage.push({ label: element.name.common, value: element.name.common })
    });

    return (
        <div>
            <Card sectioned>
                <Stack vertical>
                    <div className='card-title'>
                        <Stack>
                            <Icon source={PaintBrushMajor} color="critical" />
                            <Text variant='headingLg' as='h6' color="critical">Widget appearance</Text>
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
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="Layout"
                                    options={optionsLayout}
                                    onChange={(value) => console.log(value)}
                                    value={widgetAppearance.layout}
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="Calendar Layout"
                                    options={optionsDelivery}
                                    onChange={(value) => {
                                        handleChange(value, "calendarLayout");
                                        setChecked(false)
                                    }}
                                    value={widgetAppearance.calendarLayout}
                                />
                                <Checkbox
                                    label="Always open the calendar"
                                    checked={checked}
                                    onChange={handleCheckAlwaysCalendar}
                                />
                            </Grid.Cell>
                        </Grid>
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="Calendar language"
                                    options={optionsLanguage}
                                    onChange={(value) => handleChange(value, "calendarLanguage")}
                                    value={widgetAppearance.calendarLanguage}
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="First day of calendar"
                                    options={optionsFirstDay}
                                    onChange={(value) => handleChange(value, "calendartFirstDay")}
                                    value={widgetAppearance.calendartFirstDay}
                                />
                            </Grid.Cell>
                        </Grid>
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="Date format"
                                    options={optionsDate}
                                    onChange={(value) => handleChange(value, "dateFormat")}
                                    value={widgetAppearance.dateFormat}
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Theme Color"
                                    value={widgetAppearance.themeColor}
                                    onChange={(value) => handleChange(value, "themeColor")}
                                    suffix={
                                        <div id="color-picker-wrapper" style={{ backgroundColor: `${widgetAppearance.themeColor}` }}>
                                            <input
                                                type="color"
                                                value={widgetAppearance.themeColor}
                                                onChange={(e) => handleChange(e.target.value, "themeColor")}
                                                id="color-picker" />
                                        </div>
                                    }
                                />
                            </Grid.Cell>
                        </Grid>
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Title Color"
                                    value={widgetAppearance.titleColor}
                                    onChange={(value) => handleChange(value, "titleColor")}
                                    suffix={
                                        <div id="color-picker-wrapper" style={{ backgroundColor: `${widgetAppearance.titleColor}` }}>
                                            <input
                                                type="color"
                                                value={widgetAppearance.titleColor}
                                                onChange={(e) => handleChange(e.target.value, "titleColor")}
                                                id="color-picker" />
                                        </div>
                                    }
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Require message text color"
                                    value={widgetAppearance.textColorMessage}
                                    onChange={(value) => handleChange(value, "textColorMessage")}
                                    suffix={
                                        <div id="color-picker-wrapper" style={{ backgroundColor: `${widgetAppearance.textColorMessage}` }}>
                                            <input
                                                type="color"
                                                value={widgetAppearance.textColorMessage}
                                                onChange={(e) => handleChange(e.target.value, "textColorMessage")}
                                                id="color-picker" />
                                        </div>
                                    }
                                />
                            </Grid.Cell>
                        </Grid>
                    </Collapsible>
                </Stack>
            </Card>
        </div>
    )
}

export default WidgetAppearance
