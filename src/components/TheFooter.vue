<template>
  <div class="footer">
    <v-footer class="bg-blue-darken-2">
      <v-row justify="center" no-gutters>
        <v-col class="text-center " cols="12">
          {{ new Date().getFullYear() }} — <strong>Avaliação full stack</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<style scoped>
.footer {
  flex: 0 1;
  align-self: end;
  width: 100%;
  display: flex;
}
</style>