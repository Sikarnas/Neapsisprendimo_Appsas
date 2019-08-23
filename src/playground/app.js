class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this)
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {

    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if(options) {
        this.setState(() => ({options: options}))
      }
    } catch (e) {

    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length != this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options',json)
    }

  }

  componentWillUnmount() {
    console.log('unmount')
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }

  handlePick() {
      const result = Math.floor(Math.random()*this.state.options.length)
      const option = this.state.options[result]
      console.log(option)
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      }
    })
  }

  handleDeleteOptionSingle(text){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== text
      })
    }))
  }

  render() {
    const subtitle = 'Put your life in the hands of the computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}  
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}  
        handleDeleteOptionSingle={this.handleDeleteOptionSingle}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}



const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <div>
      {props.options.length === 0 && <p>Please add an option to get started</p> }
        {props.options.map((option) => (
          <Option 
            optionText={option} key={option}
            handleDeleteOptionSingle={props.handleDeleteOptionSingle}  
            />
        ))}
      </div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  )
}

const Option = (props) => {
  return(
    <div>
      {props.optionText}
      <button 
      onClick={(e) => {
        props.handleDeleteOptionSingle(props.optionText)
      }}
      >Delete
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = ({error: undefined})
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    this.setState(() =>({error})) 
   
    if(!error) {
      e.target.elements.option.value = ''
    }
  }  
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
