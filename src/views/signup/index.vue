<script setup lang="ts">
import Centered from "@/components/Centered.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Form from "./components/Form.vue";



const router = useRouter();


const back = () => {
  router.push({ name: "Login" });
};
</script>

<template>
  <Centered>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" class="mx-auto">
          <v-card>
            <v-card-title>
              <v-row justify="center">
                <v-col cols="auto">
                  <v-label class="text-h4">Cadastro</v-label>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <Form />
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-btn text block @click="back" variant="flat">Voltar</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Centered>
</template>
