import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';




export default class Example extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    value: '',
    data:[]
    }
  }
  
  handleChange (event) {
    this.setState({value: event.target.value});    



  }
  handleClick = () => {

    const num = this.state.value.split('');
    if(this.state.value.includes(1) || this.state.value.includes(0) ){
      let data = num.map(e =>{
        if(e == 0){
          return(
            {
              Digital: Number(e) - 1,
              Label: 0
            }
    
          )
  
        }
        else{
          return(
            {
              Digital: Number(e),
              Label: 1
            }
    
          )
        }
      })
      this.setState({data: data})
      this.setState({ value: ''})
    } else {
      alert('Bukan angka 1 atau 0')
      this.setState({ value: '' });
    }
 
  }
  

  render() {
    return (
      <div>
      <BarChart
        width={1000}
        height={300}
        data={this.state.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barCategoryGap={-1}
        
      >
      <XAxis dataKey="Label" />
        <Legend />
        <Bar dataKey="Digital" stroke="1" fill="black" />
      </BarChart>
            <div>
            <input id="1" value={this.state.value}  onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input}/>
            <button onClick={this.handleClick}>CLICK ME</button>
            <p> {this.state.value} </p>
          </div>
          </div>
    );
  }
}
