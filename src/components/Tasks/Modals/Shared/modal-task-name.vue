<template>
  <div class="row q-mb-sm">
    <q-input
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      class="col"
      label="Task name"
      outlined
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name', '')"
          class="cursor-pointer"
          name="close"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>