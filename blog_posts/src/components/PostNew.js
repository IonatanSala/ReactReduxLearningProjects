import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class PostNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(formData) {
    this.props.createPost(formData)
      .then(() => {
        // blog post created
        // navigate to index
        this.context.router.push("/")
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help text-danger">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help text-danger">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help text-danger">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Blog Post
        </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

// form for validations
function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a name';
  }

  if(!values.categories) {
    errors.categories = "Enter some categories";
  }

  if(!values.content) {
    errors.content = "Enter some content for your post";
  }

  return errors;
}

// connect: 1st is mapStateToProps, 2nd is mapDispatchToProps
// redux: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);
