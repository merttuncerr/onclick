import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      MyImage:'/images/immg1.jpg'
    }
  }
  hello =(tabContentID) => {
    if(tabContentID == 'button-1'){
      this.setState({MyImage: '/images/immg1.jpg'});
    }
    if(tabContentID == 'button-2'){
      this.setState({MyImage: '/images/mmg1.png'});
    }

  }
  render() {
    const{MyImage}=this.state;
    return (
      <div>
        <div className="container">
<div className="row">

  <div className="col-lg-6">
    <button onClick={() =>this.hello('button-1')}>resim1</button>
    <button onClick={() =>this.hello('button-2')}>resim1</button>
  </div>
  <div className="col-lg-6"><img src={MyImage}/></div>
</div>

        </div>
      </div>
    )
  }
}
