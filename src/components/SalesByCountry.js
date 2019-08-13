import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

class SalesByCountry extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: [],
            countries: []
        }
    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    countrySales = () => {
        let countries = {}
        const data = this.props.data
        data.filter(d => d.sold).forEach(c => {
            countries[c.country] ?
                countries[c.country]++ :
                countries[c.country] = 1
        })
        let array = []
        for (let i in countries) {
            array.push(
                {
                    name: i,
                    sales: countries[i],
                },
            )
        }
        return array
    }


    render() {
       let data= this.countrySales()
        return (
            <BarChart
                width={500}
                height={150}
                data={data}
                margin={{
                    top: 5, right: -20, left: -20, bottom: -10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#709FB0" />
            </BarChart>
        );
    }
}

export default SalesByCountry