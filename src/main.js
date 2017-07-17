import './style/main.scss'; // now we use css file
import faker from 'faker'; // now we can use faker
import React from 'react'; // now we can use jsx
import ReactDom from 'react-dom'; // now we can render jsx
import cowsay from 'cowsay-browser';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: cowsay.say({
        text : "Hello! I have four stomachs and speak nonsense.",
        e : "oO",
        T : "U "
      }),
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState(state => {
      return {
        content: cowsay.say({
	        text : faker.lorem.sentence(),
	        e : "oO",
	        T : "U "
        }),
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}> click me </button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render( <App />, document.getElementById('root'))
