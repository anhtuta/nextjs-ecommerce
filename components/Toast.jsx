import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import './Toast.scss';

const options = {
  position: "top-right", // "toast.POSITION.TOP_RIGHT"
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const info = (text) => {
  toast.info(text, options);
};

const success = (text) => {
  toast.success(text, options);
};

const warn = (text) => {
  toast.warn(text, options);
};

const error = (err) => {
  let msg;
  if (err.data && err.data.message) msg = err.data.message;
  else if (err) msg = err.toString();
  else msg = "Error: unexpected error occurred!";
  toast.error(msg, options);
};

const customToast = {
  info,
  success,
  warn,
  error,
};

export default customToast;
