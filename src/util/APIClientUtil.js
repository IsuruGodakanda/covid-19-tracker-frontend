import axios from 'axios';
import PropTypes from "prop-types";

const APIClientUtil = async (method, url, body, headers, additionalkeyvalue) => {
  let result;

  const dataOrParams = ["POST", "PUT"].includes(method) ? "data" : "params";

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  await axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: body,
      ... additionalkeyvalue &&  { 
        [additionalkeyvalue.key]: additionalkeyvalue.value
      }
    })
    .then(res => {
      result = res;
    })
    .catch(error => {
      if (error.response && (error.response.status === 403 || (error.response.status === 401 && sessionStorage.userToken))) {
        sessionStorage.removeItem("userToken");
        if (error.response.status === 403) {
          sessionStorage.setItem('serverError', "Access denied");
        } else {
          sessionStorage.setItem('serverError', "Invalid username or password.");
        }
        location.replace("/");
      } else {
        result = error.response;
      }
    })

    return await result;
}

APIClientUtil.propTypes = {
  method: PropTypes.string,
  requestURL: PropTypes.string,
  body: PropTypes.object,
  header: PropTypes.object
};

export default APIClientUtil;
