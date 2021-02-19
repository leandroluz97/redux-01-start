import React, { Component } from "react"
import { connect } from "react-redux"

import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"

import * as actionsCreators from "../../store/actions/index"

class Counter extends Component {
  state = {
    counter: 0,
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 }
        })
        break
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 }
        })
        break
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value }
        })
        break
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value }
        })
        break
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label='Decrement'
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label='Add 10' clicked={this.props.onAddCounter} />
        <CounterControl
          label='Subtract 15'
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Results
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
// return the state managed by redux
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionsCreators.increment()),
    onDecrementCounter: () => dispatch(actionsCreators.decrement()),
    onAddCounter: () => dispatch(actionsCreators.add(10)),
    onSubtractCounter: () => dispatch(actionsCreators.subtract(15)),
    onStoreResult: (result) => dispatch(actionsCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionsCreators.deleteResult(id)),
  }
}

//the connect function(it is a closure) pass data from redux(mapStateToProps) as props to the component(Counter)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
