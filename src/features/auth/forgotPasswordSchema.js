import * as yup from "yup";

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid email")
    .required("Email is required"),
});

export default forgotPasswordSchema;