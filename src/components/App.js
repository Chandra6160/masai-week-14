import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "one",
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      icon: false,
      count: 0
    }
  }
  componentDidMount(){
    if(this.state.count==99){
      this.setState({
        count:4
      })
    }
  }
  clickDice = () => {

    let num = 6;
    let roll = Math.ceil(Math.random() * 6);
    if(this.state.count>=100)
    {
      this.setState({
        count:0
      })
    }
    else if(this.state.count==99){
      this.setState({
        count:4
      })
    }
    else{
      this.setState({
        icon: true,
        count: this.state.count + roll
      })
    }
    
    if (roll == 1) {
      this.setState({
        str: "one",
      })
    }
    if (roll == 2) {
      this.setState({
        str: "two",
      })
    }
    if (roll == 3) {
      this.setState({
        str: "three",
      })
    }
    if (roll == 4) {
      this.setState({
        str: "four",
      })
    }
    if (roll == 5) {
      this.setState({
        str: "five",
      })
    }
    if (roll == 6) {
      this.setState({
        str: "six",
      })
    }
    console.log(roll)
  }

  render() {
    var arr = new Array(5);
    var first = 100;
    var second = 81;
    var third = 80;
    var fourth = 61;
    var fifth = 60;
    var sixth = 41;
    var seventh = 40;
    var eighth = 21;
    var ninth = 20;
    var tenth = 1;
    var snake1=99;

    return (

      <div class="container-fluid">
        <div class="row px-2 py-2 border border-warning justify-content-center ">
          <h2 class="text-black h">Snake and Ladder </h2>

        </div>
        <div class="row">
          <div class="col-3  border border-rounded px-5 py-5">
            <button class="btn btn-warning mt-2" onClick={this.clickDice}>Roll Dice</button>
            <h2><i class={`fas h mt-2 fa-dice-${this.state.str}`}></i></h2>
            {this.state.icon ? null : <h2><i class="fas fa-air-freshener"></i>P1</h2>}
            <p>score:{this.state.count}</p>
          </div>
          <div class="col-6  border border-rounded px-5 py-5">


            <div class="row" >
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == first) {
                    return (
                      <div class="square bg-dark text-white px-3">{first--}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else if(first==99) {
                    return (
                      <div class="square"><p class="text-danger">S1 {first--}</p></div>
                    )
                  }
                  else{
                    return (

                      <div class="square">{first--}</div>

                    )
                  }

                })
              }
            </div>

            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == second) {
                    return (
                      <div class="square bg-dark text-white px-3">{second++}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{second++}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
            {
                this.state.arr.map((e, id) => {
                  if (this.state.count == third) {
                    return (
                      <div class="square bg-dark text-white px-3">{third--}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{third--}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
            {
                this.state.arr.map((e, id) => {
                  if (this.state.count == fourth) {
                    return (
                      <div class="square bg-dark text-white px-3">{fourth++}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{fourth++}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == fifth) {
                    return (
                      <div class="square bg-dark text-white px-3">{fifth--}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{fifth--}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == sixth) {
                    return (
                      <div class="square bg-dark text-white px-3">{sixth++}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{sixth++}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == seventh) {
                    return (
                      <div class="square bg-dark text-white px-3">{seventh--}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{seventh--}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == eighth) {
                    return (
                      <div class="square bg-dark text-white px-3">{eighth++}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{eighth++}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == ninth) {
                    return (
                      <div class="square bg-dark text-white px-3">{ninth--}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else {
                    return (

                      <div class="square">{ninth--}</div>

                    )
                  }

                })
              }
            </div>
            <div class="row">
              {
                this.state.arr.map((e, id) => {
                  if (this.state.count == tenth) {
                    return (
                      <div class="square bg-dark text-white px-3">{tenth++}<i class="fas text-white fa-air-freshener"></i></div>
                    )
                  }
                  else if(tenth==4) {
                    return (
                      <div class="square"><p class="text-danger">S1 {tenth++}</p></div>
                    )
                  }
                  else{
                    return (

                      <div class="square">{tenth++}</div>

                    )
                  }

                })
              }
            </div>
            {this.state.count>=100 ? (<div>{alert("You win")}</div>):null}


          </div>

        </div>
      </div>
    );
  }
};
