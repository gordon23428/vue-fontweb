<template>
  <div>
    <VeeForm v-slot="{ handleSubmit }" :validation-schema="schema" as="div">
      <form @submit="handleSubmit($event, createOrder)">
        <div class="mb-3">
          <label for="name" class="form-label">姓名</label>
          <Field class="form-control" id="name" name="name" v-model="form.user.name" aria-describedby="emailHelp" type="text" />
        </div>
        <div class="mb-3">
          <ErrorMessage name="name" class="text-danger"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">電子郵件</label>
          <Field class="form-control" id="exampleInputEmail1" name="email" v-model="form.user.email" aria-describedby="emailHelp" type="email" />
        </div>
        <div class="mb-3">
          <ErrorMessage name="email" class="text-danger"/>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">電話</label>
          <Field class="form-control" id="tel" name="tel" v-model="form.user.tel" aria-describedby="emailHelp" type="text" />
        </div>
        <div class="mb-3">
          <ErrorMessage name="tel" class="text-danger"/>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">地址</label>
          <Field class="form-control" id="address" name="address" v-model="form.user.address" aria-describedby="emailHelp" type="text" />
        </div>
        <div class="mb-3">
          <ErrorMessage name="address" class="text-danger"/>
        </div>
        <div class="mb-3">
          <label for="Textarea1" class="form-label">留言</label>
          <textarea class="form-control" id="Textarea1" rows="3" v-model="form.message"></textarea>
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </VeeForm>
  </div>
</template>

<script>
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
export default {
  components: {
    VeeForm,
    Field,
    ErrorMessage
  },
  data () {
    const schema = yup.object({
      email: yup.string().required().email(),
      name: yup.string().required(),
      tel: yup.string().required(),
      address: yup.string().required()
    })
    return {
      schema,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    createOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.isLoading = true
      this.$http.post(url, { data: order }).then((response) => {
        console.log('訂單建立', response.data)
        if (response.data.success) {
          this.$store.commit('setMod', 2)
          vm.$router.push(`/checkout/custom_checkout/${response.data.orderId}`)
        }
        vm.isLoading = false
        // vm.getCart()
      })
    }
  }
}
</script>
