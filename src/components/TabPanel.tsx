import React, {ChangeEvent, useState} from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core'

export const TabPanel = () => {
    const [select, setSelect] = useState(0)

    const handleChange = (event: ChangeEvent<{}>, newSelect: number) => {
        setSelect(newSelect)
    }

    return (
        <Paper>
            <Tabs
                value={select}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                centered
            >
                <Tab label='Gen I'/>
                <Tab label='Gen II'/>
                <Tab label='Gen III'/>
                <Tab label='Gen IV'/>
            </Tabs>
        </Paper>
    )
}

