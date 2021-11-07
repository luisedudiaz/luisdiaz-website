import { FC, ReactNode, useEffect, useState, useRef } from "react";
import * as Icons from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  Modal,
  InputPicker,
  Schema,
  Form
} from "rsuite";
import { ModalProps } from "../../types/modal.types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Social } from "../../types/social.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateDoc, doc, getFirestore, arrayUnion } from "@firebase/firestore";
import { FormInstance } from "rsuite/Form";

library.add(Icons.fab);

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  href: StringType().isRequired("This field is required."),
  icon: StringType().isRequired("This field is required."),
});

const AddSocialMedia: FC<ModalProps> = ({ show, setShow }) => {
  const form = useRef<FormInstance>(null)
  const [icons, setIcons] = useState<
    { label: Icons.IconName; value: Icons.IconName }[]
  >([]);
  const [formValue, setFormValue] = useState({});

  const [, setFormError] = useState({});

  const handleSubmit = async () => {
    if (form.current?.check!()) {
      close();
      const uid = process.env.REACT_APP_UID as string
      const values = formValue as Social
      updateDoc(doc(getFirestore(), "users", uid), {
        socials: arrayUnion({
          name: values.name,
          href: values.href,
          icon: values.icon,
          prefix: "fab"
        })
      })
    }
  };

  const close = () => {
    setShow(false);
    setFormValue({
      name: "",
      href: "",
      icon: ""
    })
  };

  useEffect(() => {
    const list = Object.values(Icons) as Icons.IconDefinition[];
    list.shift();
    list.shift();
    setIcons(
      list.map((e) => {
        return { label: e.iconName!, value: e.iconName! };
      })
    );
  }, []);

  return (
    <Modal open={show} onOpen={close}>
      <Form
        fluid
        ref={form}
        onChange={setFormValue}
        onCheck={setFormError}
        formValue={formValue}
        model={model}
      >
        <Modal.Header>
          <Modal.Title>Add social</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.ControlLabel>Icon</Form.ControlLabel>
            <Form.Control
              name="icon"
              block
              as={InputPicker}
              renderMenuItem={(label: ReactNode, item: { label: Icons.IconName; }) => {
                return (
                  <div>
                    <FontAwesomeIcon icon={["fab", item.label]} /> {label}
                  </div>
                );
              }}
              data={icons}
            />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Url</Form.ControlLabel>
            <Form.Control name="href" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Name</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} appearance="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddSocialMedia;
