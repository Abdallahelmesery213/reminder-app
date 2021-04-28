import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './reminder.png';

import add_Reminder from './actions/Add_Reminder';
import Remove_Reminder from './actions/Remove_Reminder';
import Clear_Reminder from './actions/Clear_Reminder';
// import reminders from './reducers/index';


class App extends Component {
  state={
    text: '',
    date: new Date()
  }
  renderReminders = () => {
    const {reminders} = this.props;
    return (
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                <div className="closeIcon" onClick={ ()=> this.props.Remove_Reminder(reminder.id) }>X</div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render () {
    return (
      <div className="App">
        <img src={logo} />
        <div className="reminder-title">
          <h2>What Sould You Do ?</h2>
        </div>
        <input className="form-control" type="text" placeholder="Enter What Do You Think ... ?" 
        onChange={ (e) => this.setState({text:e.target.value})} value={this.state.text}/>
        {/* <input className="form-control" type="datetime-local" 
        onChange={ (e) => this.setState({date:e.target.value})} value={this.state.date}/> */}
        <DatePicker
          className="form-control"
          placeholderText="Enter Date"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date)=> this.setState({date:date}) } //only when value has changed
          showTimeSelect
          dateFormat='MMMM d, yyyy h:mm aa'	
          timeFormat='HH:mm'
          timeCaption='time'
        />
        <button onClick={ () =>  {
          this.props.add_Reminder(this.state.text , this.state.date);
          this.setState({text:'' , date:''})
        }}
        className="btn btn-primary btn-block addReminder">Add Reminder</button>
        {this.renderReminders()}
        <button onClick={()=> {this.props.Clear_Reminder()} } className="btn btn-danger btn-block clearReminder">Clear Reminder</button>
      </div>
    );
  }
}
// function mapDispatchToProps (dispatch) {
//   return {
//     add_Reminder : () => dispatch(add_Reminder())
//   }
// }
function mapStateToProps (state) {
  return {
    reminders : state
  }
}
export default connect(mapStateToProps , {add_Reminder,Remove_Reminder,Clear_Reminder}) (App);
