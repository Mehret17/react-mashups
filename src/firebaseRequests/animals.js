import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then((res) => {
        const mashups = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            mashups.push(res.data[key]);
          });
        }
        console.error('err', res);
        resolve(mashups);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (mashup) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/mashups.json`, mashup)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest };
