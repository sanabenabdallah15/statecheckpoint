import React from "react"
import './App.css';
import img from "./img/2.jpg"
const styleImg = {width:"20%",height:"20%",marginTop:20}
const styleButton ={width:"25%",backgroundColor:"#00A9FF",borderStyle:"none",borderRadius:12,height:30,marginTop:20,fontSize:25,color:"#ffff"}
const styletext = {fontWeight:"normal",fontSize:40}
class App extends React.Component{
  constructor(){
    super()
   this.state ={
      Person :{
        fullName:"Sana",
        bio:"Bio:Full stack development in GO my Code",
        imgSrc:img,
        profession:"Profession:Developpement",
        bool:true
  
      },
      intervalSinceMount: 0,

  }
  this.mountTime = new Date(); 
}

handleClick=()=>{
  
  this.setState({Person:{...this.state.Person,bool:!(this.state.Person.bool)}})

  

}
componentDidMount() {
  this.intervalId = setInterval(this.updateIntervalSinceMount, 1000); // Update every second
}

componentWillUnmount() {
  clearInterval(this.intervalId); // Clear the interval when the component is unmounted
}

updateIntervalSinceMount = () => {
  const currentTime = new Date();
  const interval = (currentTime - this.mountTime) / 1000; // Convert to seconds
  this.setState({
    intervalSinceMount: interval,
  });
}

   
 

    render(){
      return(
<div style={{marginLeft:20}}>
  <button style={styleButton} onClick={this.handleClick}>show details </button>
  { this.state.Person.bool && (
    <>
    <div>
      <img  style={styleImg} src={this.state.Person.imgSrc} />
    </div>
  
  <h1 style={{marginLeft:"8%",fontSize:70,color:"red",fontWeight:"normal",marginTop:0}}>{this.state.Person.fullName}</h1>
  <h2 style={styletext}>{this.state.Person.profession}</h2>
  <h2 style={styletext}>{this.state.Person.bio}</h2>
  </>)}
  <p>Time interval since mount: {this.state.intervalSinceMount} seconds</p>
  
 

  

  
</div>

      )
    }
    
    
 
}
export default App
