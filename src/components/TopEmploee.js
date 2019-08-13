import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

class TopEmploee extends PureComponent {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  emploee = () => {
    let owners = {}
    const data = this.props.data
    data.filter(d => d.sold).forEach(c => {
      owners[c.owner] ?
        owners[c.owner]++ :
        owners[c.owner] = 1
    })
    let array = []
    let keysSorted = Object.keys(owners).sort(function (a, b) { return owners[b] - owners[a] })
    array.push(
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

    return array

  }


  render() {
    let data = this.emploee()
    return (
      <BarChart
        width={500}
        height={150}
        data={data}
        margin={{
          top: 5, right: 30, left: -20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#709FB0"  />
      </BarChart>
    );
  }
}

export default TopEmploee