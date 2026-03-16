import * as yup from "yup"

export const PersonalSchima = yup.object({
    fName:yup.string().required("Enter Your First Name"),
    lName:yup.string().required("Enter Your Last Name"),
    phone:yup.string().required("Enter Phone Number"),
    email:yup.string().email("Please Enter A Valid Email").required("Please Enter A Valid Email")
});




export const AddressSchima = yup.object({
    city:yup.string().required("Enter Your City Here"),
    state:yup.string().required("Enter Your State Here"),
    pin:yup.string().required("Enter PIN Code Here")
})