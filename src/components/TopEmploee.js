import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

class TopEmploee extends PureComponent {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  emploee = async () => {
    let owners = {}
    const data = this.props.data
    data.map(c => { owners[c.owner] = 1 })
    data.map(m => {
      if (m.sold != false) {
        owners[m.owner]++
      }
    })
    let keysSorted = Object.keys(owners).sort(function (a, b) { return owners[b] - owners[a] })
    this.state.data.push(
      {
        name: keysSorted[0],
        sales: owners[keysSorted[0]],
      },
      {
        name: keysSorted[1],
        sales: owners[keysSorted[1]],
      },
      {
        name: keysSorted[2],
        sales: owners[keysSorted[2]],
      },
    )
    console.log(this.state.data);

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

export default TopEmploee