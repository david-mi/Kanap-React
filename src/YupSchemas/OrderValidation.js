import * as yup from 'yup';

const namesRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'.-]+$/;
const regexpAddress = new RegExp(/^[A-Za-z0-9'\.\-\s\,]+$/);
const regexpCity = new RegExp(/^[a-zA-Z\s'.-]+$/);

const schema = yup.object().shape({

  firstName: yup
    .string()
    .required('Champ Requis')
    .matches(namesRegex, 'Le prénom peut contenir : majuscules, minuscules & espaces')
    .trim()
    .min(2, 'Le prénom doit contenir au minimum 2 caractères')
    .max(20, 'Le prénom de peut pas dépasser 15 caractères'),

  lastName: yup
    .string()
    .required('Champ Requis')
    .matches(namesRegex, 'Le nom peut contenir : majuscules, minuscules & espaces')
    .trim()
    .min(2, 'Le nom doit contenir au minimum 2 caractères')
    .max(20, 'Le nom de peut pas dépasser 15 caractères'),

  email: yup
    .string()
    .trim()
    .required('Champ Requis')
    .email("L'email n'est pas dans un format valide"),

  address: yup
    .string()
    .trim()
    .required('Champ Requis')
    .matches(regexpAddress, "L'addresse n'est pas dans un format correct"),

  city: yup
    .string()
    .trim()
    .required()
    .matches(regexpCity, "Le nom de ville n'est pas dans un format correct")

});

export default schema;