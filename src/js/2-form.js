const form = document.querySelector('form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
input.placeholder = '';
textArea.placeholder = '';
const formData = {
  email: '',
  message: '',
};
form.addEventListener(
  'focus',
  event => {
    if (event.target.tagName === 'INPUT') {
      event.target.placeholder = event.target.type;
    }
    if (event.target.tagName === 'TEXTAREA') {
      event.target.placeholder = event.target.type;
    }
  },
  true
);
form.addEventListener(
  'blur',
  event => {
    if (event.target.tagName === 'INPUT') {
      event.target.placeholder = '';
    }
    if (event.target.tagName === 'TEXTAREA') {
      event.target.placeholder = '';
    }
  },
  true
);
form.addEventListener('input', () => {
  formData.email = input.value;
  formData.message = textArea.value;

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.log(error);
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  input.value = '';
  textArea.value = '';
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
});
const getValue = () => {
  try {
    const formLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formLS.email !== undefined || formLS.message !== undefined) {
      input.value = formLS.email;
      textArea.value = formLS.message;
      formData.email = formLS.email;
      formData.message = formLS.message;
    }
  } catch (error) {
    console.log(error);
  }
};
getValue();
// const handler = event => {
//   if (event.type === 'focus') {
//     if (event.target.tagName === 'INPUT') {
//       event.target.placeholder = event.target.type;
//     }
//     if (event.target.tagName === 'TEXTAREA') {
//       event.target.placeholder = event.target.type;
//     }
//   } else if (event.type === 'blur') {
//     if (event.target.tagName === 'INPUT') {
//       event.target.placeholder = '';
//     }
//     if (event.target.tagName === 'TEXTAREA') {
//       event.target.placeholder = '';
//     }
//   }

//   if (event.type === 'input') {
//     formData.email = input.value;
//     formData.message = textArea.value;

//     try {
//       localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   if (event.type === 'submit') {
//     // event.preventDefault();
//     if (!formData.email || !formData.message) {
//       alert('Fill please all fields');
//     } else if (input.value && textArea.value) {
//       formData.email = input.value;
//       formData.message = textArea.value;
//       console.log(formData);
//     }
//   }
// };

// form.addEventListener('focus', handler, true);
// form.addEventListener('blur', handler, true);
// form.addEventListener('submit', handler);
// form.addEventListener('input', handler);
