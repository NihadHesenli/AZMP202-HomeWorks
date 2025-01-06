import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Title must be at least 10 characters.")
    .max(50, "Title can't exceed 50 characters.")
    .required("Title is required."),

  price: Yup.number()
    .min(0, "Price can't be negative.")
    .max(500, "Price can't exceed $500.")
    .required("Price is required."),

  image: Yup.string()
    .url("Enter a valid URL.")
    .required("Image URL is required."),

  description: Yup.string()
    .min(20, "Description must be at least 20 characters.")
    .max(1000, "Description can't exceed 1000 characters.")
    .required("Description is required."),

  rating: Yup.number()
    .min(1, "Rating must be at least 1.")
    .max(5, "Rating can't exceed 5.")
    .required("Stock is required."),
});