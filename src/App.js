import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 5 },
      { id: 3, value: 2 },
      { id: 4, value: 8 }
    ]
  };
  render() {
    return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <main className="container">
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncremenet={this.handleIncrement} onDelete={this.handleDelete} />
      </main>
    </React.Fragment>
    );
  }
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(counter => {
      return counter.id != counterId;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}


export default App;