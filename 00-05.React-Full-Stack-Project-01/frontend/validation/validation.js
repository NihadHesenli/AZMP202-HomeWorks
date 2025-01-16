import * as Yup from 'yup';

export const prodSchema = Yup.object().shape({
    image_Url : Yup.string().url('enter a valid url').required('Fill the Input'),
    title : Yup.string().min(5,'at least 5 characters').max(13 , 'cant be more than 13 characters').required('Fill the Input'),
    description : Yup.string().min(20,'at least 20 characters').max(80 , 'cant be more than 80 characters').required('Fill the Input'),
    price : Yup.number().min(1,'need to be more than 0').max(500 , 'cant overprice than 500').required('Fill the Input'),
})