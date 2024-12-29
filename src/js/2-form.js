const form = document.querySelector('form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
input.placeholder = '';
textArea.placeholder = '';
const formData = {
  email: '',
  message: '',
};
// form.addEventListener(
//   'focus',
//   event => {
//     if (event.target.tagName === 'INPUT') {
//       event.target.placeholder = event.target.type;
//     }
//     if (event.target.tagName === 'TEXTAREA') {
//       event.target.placeholder = event.target.type;
//     }
//   },
//   true
// );
// form.addEventListener(
//   'blur',
//   event => {
//     if (event.target.tagName === 'INPUT') {
//       event.target.placeholder = '';
//     }
//     if (event.target.tagName === 'TEXTAREA') {
//       event.target.placeholder = '';
//     }
//   },
//   true
// );

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   if (!input.value || !textArea.value) {
//     alert('Fill please all fields');
//   }
// });
// form.addEventListener('input', () => {
//   formData.email = input.value;
//   formData.message = textArea.value;
//   try {
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   } catch (error) {
//     console.log(error);
//   }
// });

const handler = event => {
  if (event.type === 'focus') {
    if (event.target.tagName === 'INPUT') {
      event.target.placeholder = event.target.type;
    }
    if (event.target.tagName === 'TEXTAREA') {
      event.target.placeholder = event.target.type;
    }
  } else if (event.type === 'blur') {
    if (event.target.tagName === 'INPUT') {
      event.target.placeholder = '';
    }
    if (event.target.tagName === 'TEXTAREA') {
      event.target.placeholder = '';
    }
  }

  if (event.type === 'input') {
    formData.email = input.value;
    formData.message = textArea.value;

    try {
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    } catch (error) {
      console.log(error);
    }
  }
  if (event.type === 'submit') {
    event.preventDefault();
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
    } else if (input.value && textArea.value) {
      formData.email = input.value;
      formData.message = textArea.value;
      console.log(formData);
    }
  }
};
const getValue = () => {
  try {
    const formLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formLS.email !== null || formLS.message !== null) {
      input.value = formLS.email;
      textArea.value = formLS.message;
      formData.email = input.value;
      formData.message = textArea.value;
    }
  } catch (error) {
    console.log(error);
  }
};
form.addEventListener('focus', handler, true);
form.addEventListener('blur', handler, true);
form.addEventListener('submit', handler);
form.addEventListener('input', handler);
getValue();
