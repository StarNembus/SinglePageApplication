import React from 'react'
import axios from 'axios'
import Menu from './components/Menu';
import Table from './components/Table';
import {BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'




class App extends React.Component{
    constructor(prop) {
      super(prop);
    this.state ={
      'tables': [],
    }
  }

  componentDidMount() {
      let token = localStorage.getItem('token')
      this.setState({
          'token': token
      }, this.get_data)

  }

  get_data() {
      axios
          .get('http://127.0.0.1:8000/api/table/')
          .then(response => {
              const tables = response.data
              this.setState({
                  'table': tables
              })

          })
          .catch(error => {
              this.setState({
                  'tables': []
              })
              console.log(error)
          })
  }

  render() {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <nav>
                    <ul>
                        <li><Link to='/table'>Table</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path='/table' element={<Table tables={this.state.tables} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
  }
}

export default App;
