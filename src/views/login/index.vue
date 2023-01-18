<template>
  <Centered>
    <v-container fluid>
      <v-row>
        <v-col cols="10" sm="6" md="5" lg="4" class="mx-auto">
          <v-card>
            <Logo />
            <Form />
            <Botoes />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Centered>
</template>

<script lang="ts" setup>
import Centered from "@/components/Centered.vue";
import Botoes from "./components/Buttons.vue";
import Form from "./components/Form.vue";
import Logo from "./components/LoginLogo.vue";
</script>

<style></style>
