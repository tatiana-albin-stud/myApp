import React from "react";
import { CustomDialog } from "lib";
import { TextField } from "lib";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useRef, useState } from "react";

const AddTC = ({ open, setOpen, dataForEdit }) => {
  const formRef = useRef();

  const INITIAL_FORM_STATE = {
    title: dataForEdit?.name ? dataForEdit.name : "",
    content: dataForEdit?.content ? dataForEdit.content : "",
  };

  const FORM_VALIDATION = yup.object().shape({
    title: yup.string().trim().required("Titlul articolului este obligatoriu"),
    content: yup.string().trim().required("Completeaza casuta text"),
  });

  const handleEditTC = (values) => {};

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      title={dataForEdit ? "Editează formular" : "Adauga T&C"}
      buttonFinish="Finalizeaza"
      buttonClose="Inchide"
    >
      <Formik
        innerRef={formRef}
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          if (dataForEdit) {
            handleEditTC(values);
          } else {
            handleEditTC(values);
          }
        }}
      >
        <Form>
          <div>
            <TextField name="title" label="Title*" size="medium" />
            <TextField
              name="content"
              label="Content"
              size="medium"
              multiline
              rows={6}
            />
          </div>
        </Form>
      </Formik>
    </CustomDialog>
  );
};

export default AddTC;
