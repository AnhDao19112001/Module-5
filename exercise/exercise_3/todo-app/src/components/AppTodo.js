import {Component} from "react";

class AppTodo extends Component {
    constructor() {
        super();
        this.state = {
            textField: "",
            textList: ['Kéo ken', 'tít jeam']
        }
    }

    handleChange = (add) => {
        this.setState({
            textField: add
        })
    }

    handleAddItem = () => {
        this.setState({
            textList: [...this.state.textList, this.state.textField],
            textField: ""
        })
    }

    render() {
        return (
            <>
                <h1>To do List</h1>
                <input type='text' value={this.state.textField}
                       onChange={(event) => this.handleChange(event.target.value)}/>
                <button onClick={() => this.handleAddItem()}>Add</button>
                <ul>
                    {
                        this.state.textList.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default AppTodo;