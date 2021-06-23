import React from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link'

const newProyect = () => {
  return (
    <Layout>
      <form className="react-form" /* onSubmit={this.handleSubmit} */>
      <Link href="/" >
        <a>←Back</a>
        </Link>
        <h1>New project</h1>
        <h4>Let’s get started by naming your project.</h4>

        <fieldset className="input__container">
          <label htmlFor="formName" className="input__label" title="Nome:">
            Proyect name
          </label>

          <input
            id="formName"
            className="input"
            name="name"
            type="text" /* required */ /* onChange={this.handleChange} */ /* value={this.state.name} */
          />
        </fieldset>

        <fieldset className="input__container">
          <label htmlFor="formUrl" className="input__label" title="Url:">
            Proyect url
          </label>

          <input
            id="formUrl"
            className="input"
            name="Url"
            type="text"
            required /* onChange={this.handleChange} */ /* value={this.state.email} */
          />
        </fieldset>

        <fieldset className="input__container">
          <label
            htmlFor="formMessage"
            className="input__label"
            title="Mensagem:"
          >
            description
          </label>

          <textarea
            id="formMessage"
            className="form-textarea"
            name="message"
            required /* onChange={this.handleChange} */
          ></textarea>
        </fieldset>

        <div className="input__container">
          <input
            id="formButton"
            value="Next"
            className="btn btn-primary"
            type="submit"
            placeholder="Send message"
          />
        </div>
      </form>
    </Layout>
  );
};

export default newProyect;
