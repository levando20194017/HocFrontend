function Validator(options) {

    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage;
        var rules = selectorRules[rule.selector];
        // console.log(rules);
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        inputElement.oninput = function () {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }

        return !errorMessage;
    }
    var formElement = document.querySelector(options.form)
    if (formElement) {

        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            var enableInputs = formElement.querySelectorAll('[name]');

            var formValue = Array.from(enableInputs).reduce(function (obj1, values) {
                var obj2 = {}
                obj2[values.name] = values.value; //values chính là cái queryselector của thẻ input
                return { ...obj1, ...obj2 }; //obj1 lúc khởi tạo ban đầu chính là cái obj rỗng kia
            }, {})
            // var formValue = {};
            // enableInputs.forEach(function (enableInput, index) {
            //     var obj = {};
            //     obj[enableInput.name] = enableInput.value;
            //     formValue = { ...formValue, ...obj };
            // })

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    options.onSubmit(formValue);
                }
            }
        }

        options.rules.forEach((rule) => {
            // Lưu lại các rule
            // selectorRules[rule.selector] = rule.test;
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElement = document.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
            }
        });
        console.log(selectorRules);
    }
}
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return filter.test(value) ? undefined : message || 'Trường này phải là Email';
        }
    }
}
Validator.minLength = function (selector, minLength, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim().length >= minLength ? undefined : message || 'Password có ít nhất 6 kí tự'
        }
    }
}
Validator.isConfirm = function (selector, password, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === password() ? undefined : message || 'Mật khẩu chưa khớp'
        }
    }
}