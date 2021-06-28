import { FC, useContext } from "react";
import { context } from "../../../providers";
import {
  Button,
  ControlLabel,
  Form,
  FormGroup,
  Modal,
  Schema,
  FormControl,
  ButtonToolbar,
  FormProps,
} from "rsuite";
import { ModalProps } from "../../../types/modal.types";
import { useState } from "react";
import { Login as ILogin } from "../../../types";

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
});

const Login: FC<ModalProps> = ({ show, setShow }) => {
  const { login } = useContext(context.auth);
  const [form, setForm] = useState<FormProps>();
  const [formValue, setFormValue] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [, setFormError] = useState({});

  const handleSubmit = async () => {
    if (form?.check()) {
      await login!(formValue.email!, formValue.password!);
      close();
    }
  };

  const close = () => {
    setShow(false);
  };

  return (
    <Modal overflow backdrop show={show} onHide={close}>
      <Form
        fluid
        ref={(ref: FormProps) => setForm(ref)}
        onChange={(formValue: any) => setFormValue(formValue)}
        onCheck={(formError) => setFormError(formError)}
        formValue={formValue}
        model={model}
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-5">
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl name="email" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl name="password" type="password" autoComplete="on" />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button onClick={handleSubmit} appearance="primary" type="submit">
              Submit
            </Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Login;
