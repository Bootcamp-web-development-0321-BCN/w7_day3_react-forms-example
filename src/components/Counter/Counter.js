import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }

    // Sólo si al declarar el método onClick no usamos Arrow Function (onClick={this.susbstract})
    // Recomendación: no usar esto en casa
    this.substract = this.substract.bind(this);
  }

  add(valueAux){
    valueAux++;
    // this.state.value++;
    this.setState({ value: this.state.value + 1 }, () => {
      // punto exacto donde estaremos seguros de que se ha terminado de actualizar el estado
      console.log('Updated');
    });
  }

  substract(){
    if(this.state.value !== 0){
      this.setState({ value: this.state.value -1 });
    }
  }

  render() {
    // Esta variable no sobrevive a los render
    let valueAux = 0;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <button onClick={this.substract}>Substract</button>
          <p>{this.state.value}</p>
          <button onClick={() => this.add(valueAux)}>Add</button>
          <p>{valueAux}</p>
        </div>
      </div>
    )
  }
}


export default Counter;