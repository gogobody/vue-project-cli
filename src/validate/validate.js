import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
// import {
//   limitMaxLength,
//   getLength
// } from '../utils/authService'

const dictionary = {
  zh_CN: {
    messages: {
      required: (field) => '请输入' + field
    },
    attributes: {
      phone: '手机号',
      code: '验证码'
    }
  }
}
Validator.extend('phone', {
  messages: {
    zh_CN: field => '手机号格式不正确'
  },
  validate: value => {
    return value.length === 11 && /^\d{11}$/.test(value)
  }
})
Validator.extend('code', {
  messages: {
    zh_CN: field => '验证码格式不正确'
  },
  validate: value => {
    // if (getLength(value) > 8) {
    //   return value = limitMaxLength(value, 8)
    // }
  }
})
Validator.addLocale(zhCN)
Validator.updateDictionary(dictionary)

Vue.use(VeeValidate, {
  locale: 'zh_CN'
})
