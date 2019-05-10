import React, { Component } from "react";
import { getAllCourses, createCourse } from "../../api/coursesHandler";
import { Heading } from "react-bulma-components";
import DashboardNav from "../../pages/dashboard/components/DashboardNav";

import { Redirect } from "react-router-dom";

import "./form.css";

export default class uploadForm extends Component {
  state = {
    title: "",
    description: "",
    video: "",
    image: "",
    category: [],
    submited: false
  };

  componentWillUnmount() {
    this.setState({ submited: false });
  }

  onSubmit = e => {
    e.preventDefault();

    createCourse({
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      media: {
        video: this.state.video,
        image: this.state.image
      }
    })
      .then(res => {
        console.log("We go to course page");
        // <Redirect to="/coursemanagement" />;

        this.setState({ submited: true });

        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  // onClick = () => {
  //   console.log("clicked create button");
  //   // getAllCourses()
  //   //   .then(res => console.log(res.data))
  //   //   .catch(err => console.error(err));
  // };

  verifyThis = e => {
    console.log(e.target.value);
  };

  render() {
    if (this.state.submited == true) {
      return <Redirect to="/coursemanagement" />;
    }
    const { onSubmit, onChange } = this;
    const { title, category, description, image, video } = this.state;

    return (
      <section className="login-register-section">
        <DashboardNav />
        <Heading className="has-text-centered	">Upload Course</Heading>
        <form className="register-form box" onSubmit={onSubmit}>
          <div className="control">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={onChange}
              className="input"
              placeholder="input your title here..."
              name="title"
              type="text"
            />
            <label htmlFor="description">Description</label>
            <input
              value={description}
              onChange={onChange}
              className="input"
              placeholder="input your description here..."
              name="description"
              type="text"
            />
            <label htmlFor="video">Video</label>
            <input
              value={video}
              onChange={onChange}
              className="input"
              placeholder="input your video link here..."
              name="video"
              type="input"
            />
            <label htmlFor="category">Category</label>
            <div
              value={category}
              onChange={onChange}
              className="select control"
              placeholder="input your category link here..."
              name="category"
              type="input"
            >
              <select>
                <option>Programming</option>
                <option>Music</option>
                <option>Other</option>
              </select>
            </div>

            <label htmlFor="image">Image</label>
            <input
              value={image}
              onChange={onChange}
              className="input"
              placeholder="input your image link here..."
              name="image"
              type="input"
            />
          </div>
          <button
            className="button is-primary  is-focused"
            onClick={this.onClick}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}
