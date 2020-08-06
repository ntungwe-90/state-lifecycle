import React, { Component, Fragment } from 'react';

class AddbookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            genre: "",
            publisher: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);


     
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({title:"", author:"", genre:"", publisher:""})
        console.log("submitted");
    }
    render() {
        return (
            <div className="Mainform">
                <div className="sub">
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" onChange={this.handleChange} />
                    </div>
                    <div className="form">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" onChange={this.handleChange}/>
                    </div>
                    <div className="form">
                        <label htmlFor="genre">Genre</label>
                        <input type="text" name="genre" onChange={this.handleChange} />
                    </div>
                    <div className="form">
                        <label htmlFor="publisher">publisher</label>
                        <input type="text" name="publisher" onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

export default AddbookForm;

