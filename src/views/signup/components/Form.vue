<script setup lang="ts">
import { reactive } from "vue";

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


const form = reactive<ISignUpForm>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const emit = defineEmits<{
  (e: 'submit', form: ISignUpForm): void
}
>();

const submit = () => {
  console.log(form);
  
  emit('submit', form)
}
</script>

<template>
  <v-form class="mt-5">
    <v-text-field v-model="form.name" label="Nome" required></v-text-field>
    <v-text-field v-model="form.email" label="Email" type="email" required></v-text-field>
    <v-text-field v-model="form.password" label="Senha" type="password" required></v-text-field>
    <v-text-field v-model="form.confirmPassword" label="Confirmar senha" type="password" required></v-text-field>
    <v-btn @click="submit" color="primary" block class="mt-4"><b>Cadastrar</b></v-btn>
  </v-form>
</template>