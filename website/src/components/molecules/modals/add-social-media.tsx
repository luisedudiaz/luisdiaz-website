import { FC, ReactNode, useEffect, useState } from "react";
import * as Icons from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  Modal,
  InputPicker,
  Schema,
  FormProps,
  FormGroup,
  ControlLabel,
  Form,
  FormControl,
} from "rsuite";
import { ModalProps } from "../../../types/modal.types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Social } from "../../../types/social.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemDataType } from "rsuite/lib/@types/common";
import { firestore } from "../../../utils/firebase.utils";

library.add(Icons.fab);

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  href: StringType().isRequired("This field is required."),
  icon: StringType().isRequired("This field is required."),
});

const AddSocialMedia: FC<ModalProps> = ({ show, setShow }) => {
  const [icons, setIcons] = useState<
    { label: Icons.IconName; value: Icons.IconName }[]
  >([]);
  const [form, setForm] = useState<FormProps>();
  const [formValue, setFormValue] = useState<Social>({
    name: "",
    href: "",
  });

  const [, setFormError] = useState({});

  const handleSubmit = async () => {
    if (form?.check()) {
      close();
      await firestore().collection("users").doc(process.env.REACT_APP_UID).update({
        socials: firestore.FieldValue.arrayUnion({
          name: formValue.name,
          href: formValue.href,
          icon: formValue.icon,
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
    <Modal show={show} onHide={close}>
      <Form
        fluid
        ref={(ref: FormProps) => setForm(ref)}
        onChange={(formValue: any) => setFormValue(formValue)}
        onCheck={(formError) => setFormError(formError)}
        formValue={formValue}
        model={model}
      >
        <Modal.Header>
          <Modal.Title>Add social</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Icon</ControlLabel>
            <FormControl
              name="icon"
              block
              accepter={InputPicker}
              renderMenuItem={(label: ReactNode, item: ItemDataType) => {
                return (
                  <div>
                    <FontAwesomeIcon icon={["fab", item.label]} /> {label}
                  </div>
                );
              }}
              data={icons}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Url</ControlLabel>
            <FormControl name="href" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl name="name" />
          </FormGroup>
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
