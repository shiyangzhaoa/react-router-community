import React from 'react'
import { Calendar } from 'antd';

export default class myCalendar extends React.Component {
    dateCellRender = (value) => {
        return <div>节日 {value.getDayOfMonth()}</div>
    }

    monthCellRender = (value) => {
        return <div>月 {value.getMonth() + 1}</div>
    }

    render() {
        return (
            <Calendar defaultValue={new Date('2010-10-10')}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}