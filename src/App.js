import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, Legend, LineChart, CartesianGrid, YAxis,  Tooltip, Line
} from 'recharts';




export default class Example extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    value: '',
    data:[],
    dataAnalog: [],
    }
  }
  
  handleChange (event) {
    this.setState({value: event.target.value});    



  }
  handleClick = () => {

    const num = this.state.value.split('');
    const valid = num.map(e =>{
      if(e.includes(1) || e.includes(0)){
        return true
      }
      else{
        return false
      }
    })
    if(valid.includes(false)){
      alert('Bukan angka 1 atau 0')
      this.setState({ value: '' });
    }
    else{
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
      let dataAnalog = num.map(e =>{
        this.setState({dataAnalog :{
          Digital: 0,
          Label: 0

        }})
       
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
              Label: 0
            }
    
          )
        }

      })
      console.log(this.state.dataAnalog)

      console.log(dataAnalog)
      this.setState({data: data})
      this.setState({dataAnalog : dataAnalog}, function () {
        
       let abc = this.state.dataAnalog.map((e, els) =>{
          return e[els]
        })
        this.setState({dataReal: abc}, function(){
          console.log(this.state.dataReal)
        })
    })
      this.setState({ value: ''})



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
      
      <LineChart
                width={500}
                height={300}
                data={
                  this.state.dataAnalog

                }
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Digital" stroke="#82ca9d" />
              </LineChart>
            <div>
            <input id="1" value={this.state.value}  onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input}/>
            <button onClick={this.handleClick}>CLICK ME</button>
            <p> {this.state.value} </p>
          </div>
          
          </div>

    );
  }
}
