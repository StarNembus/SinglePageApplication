import React from 'react'



class TableForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', quantity: 0, distance: 0}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

  handleSubmit(event) {
        this.props.get_data(this.state.name, this.state.quantity,this.state.distance)
        event.preventDefault()
  }


    render() {
      return (
              <form onSubmit={(event) => this.handleSubmit(event)} >
          <input type="name" name="name" placeholder="name" value={this.state.name}
                 onChange={(event) => this.handleChange(event) }/>
                  <input type="quantity" name="quantity" placeholder="quantity" value={this.state.quantity}
                 onChange={(event) => this.handleChange(event) }/>
                  <input type="distance" name="distance" placeholder="distance" value={this.state.distance}
                 onChange={(event) => this.handleChange(event) }/>

            <select multiple name= 'name' onChange={(event) => this.handleUsersChange(event)}>
                {this.props.name.map((name) => <option value={name.id}>{table.name}{table.quantity}{table.distance}</option> )}
                </select>
        </form>
      );
    }
  }
export default TableForm;