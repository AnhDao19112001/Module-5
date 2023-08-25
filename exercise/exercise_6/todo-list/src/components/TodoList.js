import {useEffect, useState} from "react";
import * as todoService from "../service/TodoService";
import {Field, Form, Formik} from "formik";
import React from "react";
import {addTodo} from "../service/TodoService";

function TodoList() {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        getAlls();
    }, [])
    const getAlls = async () => {
        const result = await todoService.getAll();
        setTodo(result);
    }
    const handleSubmit = (value) => {
        console.log(value);
        addTodo(value);
    }
    return (


        <Formik
            initialValues={{
                id: Math.floor(Math.random()*100) +1,
                userId: Math.floor(Math.random()*100) +1,
                title: '',
                complete: false
            }
            }
            onSubmit={handleSubmit}>
            {

                <div className='container'>
                    <h1 style={{textAlign: 'center'}}>Todo List</h1>
                    <Form>
                        <div className='mb-3'>
                            <Field type='text' className='form-control' id='todo' name='title'/>
                        </div>
                        <div>
                            <label htmlFor="todo">Complete</label> <br/>
                            true <Field type='radio'  id='todo' name='complete' value="true" /><br/>
                            false  <Field type='radio'  id='todo' name='complete' value="false"/>
                        </div>
                        <div>
                            <button type='submit'
                                    className='btn btn-primary'>Submit
                            </button>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>UserId</th>
                                <th>Title</th>
                                <th>Complete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {todo.map((value, key) => (
                                <tr key={key.id}>

                                    <td>{value.id}</td>
                                    <td>{value.UserId}</td>
                                    <td>{value.title}</td>
                                    <td>{value.completed ? "true" : "false"}</td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>

                    </Form>
                </div>
            }
        </Formik>

    )
}

export default TodoList
