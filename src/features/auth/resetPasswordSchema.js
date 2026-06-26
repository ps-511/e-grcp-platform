import * as yup from "yup";

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Passwords must match"
    )
    .required("Confirm Password is required"),
});

export default resetPasswordSchema;