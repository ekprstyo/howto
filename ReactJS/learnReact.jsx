{
  /* Create a Simple JSX Element */
}
const JSX = <h1>Hello JSX!</h1>;

{
  /* Create a Complex JSX Element */
}
const JSX2 = (
  <div>
    <h1>This Is JSX</h1>
    <p>for Multiple element use container</p>
    <ul>
      <li>List one</li>
      <li>List two</li>
      <li>List tree</li>
    </ul>
  </div>
);

{
  /* Render HTML Elements to the DOM */
}
const JSX3 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
const container = document.getElementById("container");
ReactDOM.render(JSX, container);

{
  /* Define an HTML Class in JSX */
}
const JSX4 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

{
  /* Learn About Self-Closing JSX Tags */
}
const JSX5 = (
  <div>
    <h2>Welcome to React!</h2> <br /> {/* Self-Closing */}
    <p>Be sure to close all tags!</p>
    <hr /> {/* Self-Closing */}
  </div>
);

{
  /* Create a Stateless Functional Component */
}
const MyComponent = function () {
  return <div>This is Component</div>;
};

{
  /*  Create a React Component */
}
class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

const container2 = document.getElementById("container");
ReactDOM.render(<MyComponent2 />, container2);

{
  /*Create a Component with Composition*/
}
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}

{
  /*Use React to Render Nested Components*/
}
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
}

{
  /* Compose React Components */
}
class Fruits2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits2 />
        <Vegetables />
      </div>
    );
  }
}

{
  /* Render a Class Component to the DOM */
}
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

const container3 = document.getElementById("challenge-node");
ReactDOM.render(<TypesOfFood />, container2);
{
  /* render class component use element */
}

{
  /* Write a React Component from Scratch */
}
class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

const container4 = document.getElementById("challenge-node");
ReactDOM.render(<MyComponent3 />, container4);

{
  /* Pass Props to a Stateless Functional Component */
}
function CurrentDate(props) {
  return (
    <div>
      <p>The current date is: {props.date}</p>{" "}
      {/* use curly bracket for props*/}
    </div>
  );
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />{" "}
        {/* use curly bracket for function, unnecessarry if just string*/}
      </div>
    );
  }
}

{
  /* Pass an Array as Props */
}
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Shower", "Eat", "Work"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Work", "Learn", "Happy"]} />
      </div>
    );
  }
}

{
  /* Use Default Prop */
}
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component {props.items}</h1>
    </div>
  );
};

ShoppingCart.defaultProps = { items: 0 };

{
  /* Override Default Props */
}
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />;
  }
}

{
  /*Use PropTypes to Define the Props You Expect*/
}
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = { quantity: PropTypes.number };

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}

{
  /*Access Props Using this.props*/
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Welcome name="Reign" />
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
      </div>
    );
  }
}

{
  /*Review Using Props with Stateless Functional Components*/
}
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}

function Camper(props) {
  Camper.defaultProps = { name: "CamperBot" };
  Camper.propTypes = { name: PropTypes.string.isRequired };
  return <p>{props.name}</p>;
}

{
  /*Create a Stateful Component*/
}
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Riley",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

{
  /*Render State in the User Interface*/
}
class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

{
  /*Render State in the User Interface Another Way*/
}
class MyComponent5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

{
  /*Set State with this.setState*/
}
class MyComponent6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "React Rocks!",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

{
  /*Bind 'this' to a Class Method*/
}
class MyComponent7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

{
  /* use state to toggle component */
}
class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((state) => {
      if (state.visibility === true) {
        return {
          visibility: false,
        };
      } else {
        return {
          visibility: true,
        };
      }
    });
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

{
  /*Write a Simple Counter*/
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state) => {
      return (state.count += 1);
    });
  }

  decrement() {
    this.setState((state) => {
      return (state.count -= 1);
    });
  }

  reset() {
    this.setState((state) => {
      return (state.count = 0);
    });
  }

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

{
  /*Create a Controlled Input*/
}
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

{
  /*Create a Controlled Form*/
}
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

{
  /*Pass State as Props to Child Components*/
}
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}

{
  /*Pass a Callback as Props*/
}
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

{
  /*Use the Lifecycle Method componentWillMount*/
}
class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("component will mount");
  }
  render() {
    return <div />;
  }
}

{
  /*Use the Lifecycle Method componentDidMount*/
}
class MyComponent5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}

{
  /*Add Event Listeners*/
}
class MyComponent6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

{
  /*Optimize Re-Renders with shouldComponentUpdate*/
}
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    console.log("Should I update?");
    if (nextProps.value % 2 == 0) {
      return true;
    }
    return false;
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

{
  /*Introducing Inline Styles*/
}
class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: "72" }}>Big Red</div>;
  }
}

{
  /*Add Inline Style In React*/
}
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
};
class Colorful extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}

{
  /*Use Advanced JavaScript in React Render Method*/
}
const inputStyle = {
  width: 235,
  margin: 5,
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: "",
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "",
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful",
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}

{
  /*Render with an If-Else Condition*/
}
class MyComponent7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    if (this.state.display == true) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}

{
  /*Use && for a More Concise Conditional*/
}
class MyComponent8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}

{
  /*Use a Ternary Expression for Conditional Rendering*/
}
const inputStyle2 = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: "",
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle2}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge < 18
          ? buttonThree
          : buttonTwo}
      </div>
    );
  }
}

{
  /*Render Conditionally from Props*/
}
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }
  render() {
    const expression = Math.random() >= 0.5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}

{
  /*Change Inline CSS Conditionally Based on Component State*/
}
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {
      border: "1px solid black",
    };
    const input = this.state.input;
    input.length > 15 ? (inputStyle.border = "3px solid red") : inputStyle;
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

{
  /*Use Array.map() to Dynamically Render Elements*/
}
const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      toDoList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((i) => <li>{i}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

{
  /*Give Sibling Elements a Unique Key Attribute*/
}
const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((i) => <li key={i}>{i}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

{
  /*Use Array.filter() to Dynamically Filter an Array*/
}
class MyComponent9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnline = this.state.users.filter((u) => u.online === true);
    const renderOnline = usersOnline.map((i) => (
      <li key={i.username}>{i.username}</li>
    ));
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

{
  /*Render React on the Server with renderToString*/
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

ReactDOMServer.renderToString(<App />);
