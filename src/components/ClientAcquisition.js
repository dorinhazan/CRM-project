import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, } from 'recharts'

import axios from 'axios'


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

class ClientAcquisition extends PureComponent {
    constructor() {
        super()
        this.state = {
            currentMonth: 0,
            sixMonth: 0,
            twelveMonth: 0
        }
    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    async getClientsCurrnt() {
        let data = await axios.get("http://localhost:8089/monthclients")
        return data
    }

    async getClientsSix() {
        let data1 = await axios.get("http://localhost:8089/monthclientssixmonth")
        return data1
    }

    async getClientsTwelve() {
        let data2 = await axios.get("http://localhost:8089/monthclientstwelvemonth")
        return data2
    }

    componentDidMount = async () => {
        const response = await this.getClientsCurrnt()
        const response1 = await this.getClientsSix()
        const response2 = await this.getClientsTwelve()
        this.setState({ currentMonth: response.data.length })
        this.setState({ twelveMonth: response2.data.length })
        this.setState({ sixMonth: response1.data.length })
        
    }

    getData = () => {
        const info = [
            { name: 'cuurent month', value: this.state.currentMonth },
            { name: '0-6 ', value: this.state.sixMonth },
            { name: '6-12', value: this.state.twelveMonth },
        ]
        return info
    }

    render() {
        let data = this.getData()
        return (
            <PieChart width={300} height={200}>
                <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
            </PieChart>
        );
    }
}


export default ClientAcquisition
