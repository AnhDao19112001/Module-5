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
        if(this.state.textField !== ""){

           const newList = [...this.state.textList, this.state.textField]
                this.setState(() => ({textList: newList, textField: "" })
                )
        }



    }

    render() {
        return (
            <>
                <h1 style={{textAlign: "center"}}>To do List</h1>
                <input className="form-control"
                    type='text' value={this.state.textField}
                       onChange={(event) => this.handleChange(event.target.value)} />
                <button className="btn btn-primary mb-3"
                    onClick={() => this.handleAddItem()}>Add</button>
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