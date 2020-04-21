import React, {Component} from 'react';
import 'carbon-components/scss/globals/scss/styles.scss';
import List from './list.jsx'
import { Button, Form, FormGroup, Tab, Tabs, TextInput, TextArea } from 'carbon-components-react';

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quantity: '',
      description: '',
      list: [],
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedList = await fetch('http://localhost:9080/list/groceries/add', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await addedList.json();
      // let arr = this.state.list;
      // arr = arr.push(this.state.name)
        this.setState({
          list: parsedResponse
        })
    } catch (err) {
      console.log(err);
    }
  }

  getListItems = async () => {
    try {
      const addedList = await fetch('http://localhost:9080/list/groceries/all', {
        method: 'GET',
        credentials: 'include',
      });
      const parsedResponse = await addedList.json();
      return parsedResponse
    } catch (err) {
      console.log(err);
    }
  }


  deleteItem = (e, name) => {
    try {
      const deletedList = fetch('http://localhost:9080/list/groceries/' + name, {
        method: 'DELETE',
        credentials: 'include',
      });
    //   const deletedParsedResponse = await deletedList.json();
      let arr = this.state.list;
      arr = arr.map((item, i) => {
        if (item.name === name) {
          arr.splice(i, 1) 
        }
      })
      this.setState({
        list: arr,
      })      
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getListItems().then((list) => {
        if (Array.isArray(list)) {
          this.setState({
            list: list,
          })
        }
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {

    return (
      <div>
        <div className="Wrapper">
          <div className="wrapperItems">
            <div style={{ width: '100%'}}>
                <Tabs>
                  <Tab
                    href="#"
                    id="tab-1"
                    label="Grocery List"
                  >
                    <div className="some-content">
                    <h1 id='title'> Grocery List </h1>
                     {this.state.list.length > 0 ? 
                      <List list={this.state.list} deleteItem={this.deleteItem} /> 
                      : null}
                    </div>
                  </Tab>
                  <Tab
                    href="#"
                    id="tab-2"
                    label="Add an Item"
                  >
                    <div className="some-content">
                    <Form className="Form" onSubmit={this.handleSubmit}>
                        <h2> Add an Item </h2>
                          <FormGroup>
                            <TextInput
                              onChange={this.handleChange}
                              name="name"
                              id="name"
                              invalidText="Invalid error message."
                              labelText="Name"
                              placeholder="Enter name here"
                            />
                          </FormGroup>
                          <FormGroup>
                          <FormGroup>
                            <TextInput
                              onChange={this.handleChange}
                              name="quantity"
                              id="quantity"
                              invalidText="Invalid error message."
                              labelText="Quantity"
                              placeholder="How many?"
                            />
                          </FormGroup>
                          <TextArea
                            cols={30}
                            name="description"
                            id="description"
                            invalidText="Invalid error message."
                            labelText="Description"
                            placeholder="Describe"
                            rows={4}
                          />
                          </FormGroup>
                          <Button
                            kind="primary"
                            tabIndex={0}
                            type="submit"
                          >
                            Submit
                          </Button>
                      </Form>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default FormComponent;
