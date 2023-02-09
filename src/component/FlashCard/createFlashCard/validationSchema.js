import * as Yup from 'yup';

const SUPPORTED_FORMATS = ["image/png", "image/jpg", "image/jpeg"];
const validationSchema = Yup.object().shape(
    {
        createGroup:Yup.object().shape(
            {
                create_Group:Yup.string().required('Please a valid provide group name'),
                description:Yup.string().required('Please a valid  provide description'),
                image:Yup.mixed().nullable().test("FILE_FORMAT","Please provide jpeg png or jpg format.",
                (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type)))
          }),
          terms : Yup.object().shape({
           
            term:Yup.string().required('Please a valid provide group term name.'),
            defination:Yup.string().required('Please a valid provide defination.'),
            image:Yup.mixed().nullable().test("FILE_FORMAT","Please provide jpeg png or jpg format.",
            (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type)))
        })
        
    }
)

export default validationSchema;