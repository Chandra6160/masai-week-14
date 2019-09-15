import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById('root'));



// let clicks = 0;
//     let num = 6;
//     let roll = Math.ceil(Math.random() * 6);
//     clicks++
//     if ((clicks % 2) == 0) {
//       if (this.state.count >= 100) {
//         this.setState({
//           count2: 0
//         })
//       }
//       else if (this.state.count == 99) {
//         this.setState({
//           count2: 4,
//         })
//       }
//       else if (this.state.count == 55) {
//         this.setState({
//           count2: 13,
//         })
//       }
//       else {
//         this.setState({
//           icon: true,
//           count2: this.state.count + roll,
//         })
//       }
//     }
//     else{
//       if (this.state.count >= 100) {
//         this.setState({
//           count: 0
//         })
//       }
//       else if (this.state.count == 99) {
//         this.setState({
//           count: 4,
//         })
//       }
//       else if (this.state.count == 55) {
//         this.setState({
//           count: 13,
//         })
//       }
//       else {
//         this.setState({
//           icon2: true,
//           count: this.state.count + roll,
//         })
//       }
//     }