import React, { Component } from "react";
 
class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this);

        addItem(e) {
            if(this._inputElement.value !== ""){
                let newItem = {
                    text: this._inputElement.value,
                    key: Date.now()
                };
            }

        }
    }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}


export default TodoList;