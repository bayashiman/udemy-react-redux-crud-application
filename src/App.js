import React from 'react';
import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("i am click")}}/>
//      </React.Fragment> 
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "NoName", age: 3 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
