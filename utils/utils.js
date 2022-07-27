import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "The product name should be more than 5 characters!")
    .required("Please enter the name of the product"),
  price: Yup.number("the product price should a positive number")
    .required("Please enter the product price")
    .min(10),
  description: Yup.string().required("Please give the product description"),
  category: Yup.string().required("Please select a category"),
  subCategory: Yup.string().optional(),
  images: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().trim().required("Please provide the image name"),
        _value: Yup.string().trim().required("Please provide the image value"),
      })
    )
    .min(1, "You should upload at least one image")
    .max(4, "The  max product image is 4"),

  specifications: Yup.mixed().when(["category"], {
    is: (category) => {
      return category === "Computer and Laptop";
    },
    then: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().trim().required("Please provide the image name"),
          _value: Yup.string().trim().required("This field is required"),
        })
      )
      .min(6),
  }),
});

const allInputsAndSelects = (divClass) => {
  const div = document.querySelector(`.${divClass}`);
  const inputs = div.getElementsByTagName("input");
  const selects = div.getElementsByTagName("select");
  return Array.prototype.slice
    .call(inputs)
    .concat(Array.prototype.slice.call(selects));
};
export const disableAll = (divClass) => {
  const elmts = allInputsAndSelects(divClass);
  elmts.forEach((el) => {
    el.setAttribute("disabled", "");
  });
};
export const removeDisable = (divClass) => {
  const elmts = allInputsAndSelects(divClass);
  elmts.forEach((el) => {
    el.removeAttribute("disabled");
  });
};
