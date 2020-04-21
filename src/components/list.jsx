import React, {Component} from 'react';
import './myCSS.css';
import 'carbon-components/scss/globals/scss/styles.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      deleteItem: props.deleteItem
    }
  }

  componentDidMount() {

  }

  render() {    
    


    return (
      <div>
            
      </div>
    )
  }
}

export default List;
