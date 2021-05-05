import React, { Component } from 'react'
import "./Form.css";

const validators = {
  title: (value) => {
    let message;
    if (!value) {
      message = "Title is required";
    } else if (value.length < 3) {
      message = "Invalid title";
    }

    return message;
  },
  year: (value) => {
    let message;
    if (!value) {
      message = "Year is required";
    } else if (value.length !== 4) {
      message = "Invalid year";
    }

    return message;
  },
  runtime: (value) => {
    let message;
    if (!value) {
      message = "Runtime is required";
    } else if (value.length < 3) {
      message = "Invalid runtime";
    }

    return message;
  },
  director: (value) => {
    let message;
    if (!value) {
      message = "Director is required";
    } else if (value.length < 3) {
      message = "Invalid director";
    }

    return message;
  }
}

export default class Form extends Component {
  // state = {
  //   fields:{

  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: "",
        year: "",
        runtime: "",
        director: ""
      },
      errors: {
        title: null,
        year: null,
        runtime: null,
        director: null
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.isValid()){
      this.props.addMovie(this.state.fields);
      this.setState({
        fields: {
          title: "",
          year: "",
          runtime: "",
          director: ""
        },
        errors: {
          title: null,
          year: null,
          runtime: null,
          director: null
        }
      })
    }
  }

  // handleTitleChange(event) {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       title: event.target.value,
  //     }
  //   });
  // }

  // handleYearChange(event) {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       year: event.target.value
  //     }
  //   });
  // }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value)
      }
    });
  }

  isValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some(key => errors[key]);
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }} >
        <div className="form-item">
          <label htmlFor="title">Title: </label>
          <input className={`${errors.title ? "error-input" : ""}`} placeholder="Title.." type="text" name="title" value={fields.title} onChange={(e) => this.handleChange(e)} />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>
        <div className="form-item">
          <label htmlFor="year">Year: </label>
          <input type="text" name="year" value={fields.year} onChange={(e) => this.handleChange(e)} />
          {errors.year && <p style={{ color: 'red' }}>{errors.year}</p>}
        </div>
        <div className="form-item">
          <label htmlFor="runtime">Runtime: </label>
          <input type="text" name="runtime" value={fields.runtime} onChange={(e) => this.handleChange(e)} />
          {errors.runtime && <p style={{ color: 'red' }}>{errors.runtime}</p>}
        </div>
        <div className="form-item">
          <label htmlFor="director">Director: </label>
          <input type="text" name="director" value={fields.director} onChange={(e) => this.handleChange(e)} />
          {errors.director && <p style={{ color: 'red' }}>{errors.director}</p>}
        </div>
        <button disabled={!this.isValid()} type="submit">Create movie</button>
      </form>
    )
  }
}
