import * as Yup from 'yup';

export const SUPPORTED_FORMATS = ["image/png", "image/jpg", "image/jpeg"];
const validationSchema = Yup.object().shape(
    {
        createGroup:Yup.object().shape(
            {
                create_Group:Yup.string().required('Please provide group name'),
                description:Yup.string().required('Please provide description')
          }),
          terms : Yup.array(
            Yup.object({
            term:Yup.string().required('Please provide term name.'),
            defination:Yup.string().required('Please provide defination.')
    }))
        
    }
)

export default validationSchema;