import axios from 'axios';

const createURL = (
 endpoint,
 lightHouseService
) => {
 switch (lightHouseService) {
   case 'default':
     return `${process.env.REACT_APP_DEFAULT}/${endpoint}`;
   default:
     return '';
 }
};

export default (args) => {
 const {
   endpoint,
   method,
   params,
   data,
   headers,
   // authenticated,
   lightHouseService,
 } = args;

 // const token = null;
 const mandatoryHeaders = {
   Accept: 'application/json',
 };

 const url = createURL(endpoint, lightHouseService);

 const requestHeaders = Object.assign({}, mandatoryHeaders, headers);
 const config = {
   method,
   params,
   headers: requestHeaders,
   data,
   url,
 };

 // if (authenticated) {
 //   if (token) {
 //     config.headers.Authorization = `Bearer ${token}`;
 //   } else {
 //     throw new Error('No token saved!');
 //   }
 // }

 return axios
   .request(config)
   .then((response) => {
     if (response.status >= 200 && response.status <= 209) {
       return response.data;
     }

     throw Error(response.statusText);
   })
   .catch(error => {
     throw error;
   });
};