import { FC } from "react";
// import { context } from "../../providers";
// import {
//   Button,
//   Form,
//   Modal,
//   Schema,
//   ButtonToolbar,
// } from "rsuite";
import { ModalProps } from "../../types/modal.types";
// import { useState } from "react";
// import { Login as ILogin } from "../../types";
// import { FormInstance } from "rsuite/Form";

// const { StringType } = Schema.Types;

// const model = Schema.Model({
//   email: StringType()
//     .isEmail("Please enter a valid email address.")
//     .isRequired("This field is required."),
//   password: StringType().isRequired("This field is required."),
// });

const Login: FC<ModalProps> = ({ show, setShow }) => {
  // const { login } = useContext(context.auth);
  // const form = useRef<FormInstance>(null)
  // const [formValue, setFormValue] = useState({});

  // const [, setFormError] = useState({});

  // const handleSubmit = async () => {
  //   if (form.current?.check!()) {
  //     const values = formValue as ILogin
  //     await login!(values.email, values.password);
  //     close();
  //   }
  // };

  // const close = () => {
  //   setShow(false);
  // };

  return (
    // <Modal overflow backdrop open={show} onClose={close}>
    //   <Form
    //     fluid
    //     ref={form}
    //     onChange={setFormValue}
    //     onCheck={setFormError}
    //     formValue={formValue}
    //     model={model}
    //   >
    //     <Modal.Header>
    //       <Modal.Title>Login</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body className="mb-5">
    //       <Form.Group>
    //         <Form.ControlLabel>Email</Form.ControlLabel>
    //         <Form.Control name="email" />
    //       </Form.Group>
    //       <Form.Group>
    //         <Form.ControlLabel>Password</Form.ControlLabel>
    //         <Form.Control name="password" />
    //       </Form.Group>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <ButtonToolbar>
    //         <Button onClick={handleSubmit} appearance="primary" type="submit">
    //           Submit
    //         </Button>
    //       </ButtonToolbar>
    //     </Modal.Footer>
    //   </Form>
    // </Modal>
    <div>Hi</div>
  );
};

export default Login;
