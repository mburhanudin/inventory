import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./Login.css";
import authService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger text-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('pinkyman2021@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      authService.login(username, password).then(() => {
        if (username === "admin") {
          props.history.push("/home");
          window.location.reload();
        } else {
          props.history.push("/home");
          window.location.reload();
        }
      });
    } else {
      setLoading(false);
    }
  };

  return (
    <div class="wrapper-login">
      <Form onSubmit={handleLogin} ref={form}>
        <div class="row no-gutters">
          <div class="col-sm-6 col-md-4 mt-5 center">
            <div className="card-login">
              <h5 className="text-center font-weight-bold mt-2">Warehouse</h5>
              <div className="card-body">
                <div className="form-group row p-3">
                  <label
                    for="username"
                    className="col-md-4 col-form-label text-md-right font-weight-bold"
                  >
                    Email
                  </label>
                  <div className="col-md-8">
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required]}
                      autocomplete="off"
                    />
                  </div>
                </div>

                <div className="form-group row p-3">
                  <label
                    for="password"
                    className="col-md-4 col-form-label text-md-right font-weight-bold"
                  >
                    Password
                  </label>
                  <div className="col-md-8">
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required]}
                    />
                  </div>
                </div>
                <div className="col-md-6 offset-md-9">
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block"
                      style={{ backgroundColor: "#073590" }}
                      disabled={loading}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span className="font-weight-bold">Login</span>
                    </button>
                  </div>
                </div>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default Login;
