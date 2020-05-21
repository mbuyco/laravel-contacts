<template>
  <b-card :title="`${contact.first_name} ${contact.last_name}`">
    <b-card-text>
      <div>
        <strong>email:</strong>
        <input
          ref="emailInput"
          type="email"
          v-if="editMode"
          v-model="contact.email"
          @keyup.enter="onSave"
        >
        <span v-if="!editMode">{{ contact.email }}</span>
      </div>
      <div>
        <strong>street:</strong>
        <input
          type="text"
          v-if="editMode"
          v-model="contact.street"
          @keyup.enter="onSave"
        >
        <span v-if="!editMode">{{ contact.street }}</span>
      </div>
      <div>
        <strong>zip code:</strong>
        <input
          type="text"
          v-if="editMode"
          v-model="contact.zip_code"
          @keyup.enter="onSave"
        >
        <span v-if="!editMode">{{ contact.zip_code }}</span>
      </div>
      <div>
        <strong>city:</strong>
        <input
          type="text"
          v-if="editMode"
          v-model="contact.city"
          @keyup.enter="onSave"
        >
        <span v-if="!editMode">{{ contact.city }}</span>
      </div>
    </b-card-text>

    <b-button
      size="sm"
      v-if="!editMode"
      @click="onEdit"
    >
      <b-icon icon="pencil" />
    </b-button>

    <b-button
      size="sm"
      v-if="editMode"
      variant="success"
      @click="onSave"
    >
      Save
    </b-button>

    <b-button
      size="sm"
      variant="danger"
      @click="onDelete"
    >
      <b-icon icon="trash" />
    </b-button>
  </b-card>
</template>

<script>
export default {
  data: () => ({
    editMode: false,
  }),

  methods: {
    onDelete() {
      this.$emit('delete', this.contact.id);
    },

    onEdit() {
      this.editMode = true;
      this.$nextTick(() => this.$refs.emailInput.focus());
    },

    onSave() {
      this.editMode = false;
      this.saveContact();
    },

    saveContact() {
      this.$emit('save', this.contact.id, this.contact);
    },
  },

  props: {
    contact: {
      default: () => ({}),
      type: Object,
    },
  },
};
</script>
