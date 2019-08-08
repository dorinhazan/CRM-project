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

    emploee = async () => {
        let countries = {}
        const data = this.props.data
        data.map(c => { countries[c.country] = 1 })
        data.map(m => {
            if (m.sold != false) {
                countries[m.country]++
            }
            
        }
        )
        // let arr = []
        // for (let i in countries) {
        //     const country = {
        //         name: i,
        //         sales: countries[i]
        //     }
        //     arr.push(country)
        // }
        // this.setState({
        //     countries: arr
        // },function(){

        // })
        



    }


    render() {
        this.emploee()
        return (
            <BarChart
                width={500}
                height={180}
                data={this.state.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
        );
    }
}

export default SalesByCountry