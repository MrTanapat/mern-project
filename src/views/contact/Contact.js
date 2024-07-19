import React, { Component, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

class contact extends React.Component {
  render() {
    return (
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mt-5">Contact Us</h1>

              <form id="contact-form">
                {/* Row 1 name and email */}
                <div className="row mt-3">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                    ></input>
                  </div>
                </div>
                {/* Row 2 Subject and Message */}
                <div className="row mt-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    ></input>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12">
                    <textarea
                      rows={"5"}
                      name="message"
                      className="form-control"
                      placeholder="Please enter a message"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 offset-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
