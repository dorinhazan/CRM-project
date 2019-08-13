import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'


const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];


class SalesSience extends PureComponent {
    constructor() {
        super()
        this.state = {
            currentMonth: 0,
            days: 0
        }
    }

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    async getClientsCurrnt() {
        let data = await axios.get("http://localhost:8089/yearclients")
        console.log(data)

        return data
    }

    // getDaysInMonth = async (month, year) => {
    //     var date = new Date(Date.UTC(year, month, 1));
    //     var days = [];
    //     while (date.getMonth() === month) {
    //         days.push(new Date(date));
    //         date.setDate(date.getDate() + 1);
    //     }
    //     return days;
    // }

    // componentDidMount = async () => {
    //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //     const date = new Date();

    //     let currentDay = days[date.getDay()]
    //     this.setState({
    //         days: currentDay
    //     },function(){
    //         console.log(this.state.days);

    //     })
    // }
    componentDidMount = async () => {
        const response = await this.getClientsCurrnt()

        this.setState({ currentMonth: response.data.length })

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
        return (
            <LineChart
                width={500}
                height={150}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" fill="#709FB0"  activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}











export default SalesSience