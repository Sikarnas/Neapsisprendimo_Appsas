class Visible extends React.Component {
    constructor(props){
        super(props)
        this.HandleShow = this.HandleShow.bind(this)
        this.state = {
            Show: false

        }
    }
    HandleShow() {
        this.setState((prevState) => {
            return {
                Show: !prevState.Show
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibilty toggle:</h1>
                <button onClick={this.HandleShow}>Show content</button>
                {this.state.Show && (
                <div>
                <p>Hey. These are some details you can now see!</p>
                </div>
      )}
            </div>
        )
    }
}

ReactDOM.render(<Visible/>,document.getElementById('app'))




