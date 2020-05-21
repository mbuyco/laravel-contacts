<template>
  <b-row>
    <b-col
      v-for="(contact, index) in contacts"
      :key="index"
      class="mb-5"
      sm="3"
    >
      <contact-card
        :contact="contact"
        @save="apiService.update"
        @delete="onDelete"
      />
      <div v-if="(index % 4) === 0" class="w-100"></div>
    </b-col>
  </b-row>
</template>

<script>
import ContactCard from '../components/ContactCard.vue';
import apiServiceMixin from '../../../shared/mixins/apiServiceMixin';

export default {
  components: {
    ContactCard,
  },

  async created() {
    this.contacts = await this.apiService.list();
  },

  data: () => ({
    contacts: [],
  }),

  methods: {
    async onDelete(contactId) {
      const index = this.contacts.findIndex(({ id }) => id === contactId);
      await this.apiService.delete(contactId);
      this.contacts.splice(index, 1);
    },
  },

  mixins: [
    apiServiceMixin('/api/contacts'),
  ],
};
</script>
