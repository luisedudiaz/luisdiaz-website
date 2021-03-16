import { Modal } from "bootstrap";
import { FC, FormEvent, useContext, useState } from "react";
import { context } from "../../../providers";

const Login: FC = () => {
  const [errors, setErrors] = useState<Array<string>>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useContext(context.auth);

  const hasError = (key: string) => {
    return errors.indexOf(key) !== -1;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = errors;
    if (email === "" && !errors.includes("email")) {
      e.push("email");
    }
    if (password === "" && !errors.includes("password")) {
      e.push("password");
    }
    if (e.length > 0) {
      setErrors([...errors, ...e]);
    } else {
      const loginModal = Modal.getInstance(document.querySelector("#login")!);
      loginModal.hide();
      clear()
      await login!(email, password);
    }
  };

  const clear = () => {
    setEmail("");
    setPassword("");
    setErrors([]);
  };

  const handleEmailInput = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    const expression = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validEmail = expression.test(
      String(event.currentTarget.value).toLowerCase()
    );
    if (validEmail) {
      const index = errors.indexOf("email");
      if (index !== -1) {
        errors.splice(index, 1);
      }
    } else {
      if (errors.indexOf("email")) {
        errors.push("email");
      }
    }
  };

  const handlePasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    // const expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    // const validPassword = expression.test(String(event.currentTarget.value))
    // console.log(validPassword);

    // if (validPassword) {
    const index = errors.indexOf("password");
    if (index !== -1) {
      errors.splice(index, 1);
    }
    // } else {
    //   if (errors.indexOf("password")) {
    //     errors.push("password");
    //   }
    // }
  };

  return !isLoggedIn ? (
    <div
      className="modal fade"
      id="login"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="login"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={clear}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col-12">
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input
                      required
                      value={email}
                      onChange={handleEmailInput}
                      type="email"
                      name="email"
                      id="email"
                      className={
                        hasError("email")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Email"
                    />
                    <div className="invalid-feedback">Email not valid</div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input
                      required
                      value={password}
                      onChange={handlePasswordInput}
                      type="password"
                      name="password"
                      id="password"
                      className={
                        hasError("password")
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Password"
                    />
                    <div className="invalid-feedback">Password not valid</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
