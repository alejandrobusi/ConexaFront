import Swal from 'sweetalert2';

export const alertSuccess = (message, title, action) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'success',
    confirmButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};

export const alertError = (message, title, action) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};
