<template>
  <Head title="Create User"></Head>

  <h1 class="text-3xl">Create New User</h1>

  <form @submit.prevent="submit" class="max-w-md mx-auto mt-8">
    <div class="mb-6">
      <label
        class="block mb-2 text-xs font-bold text-gray-700 uppercase"
        for="name"
      >
        Name
      </label>
      <input
        v-model="form.name"
        class="w-full p-2 border border-gray-400 rounded"
        type="text"
        id="name"
        name="name"
        required
      />

      <div
        v-if="errors.name"
        v-text="errors.name"
        class="text-red-500 text-xs mt-1"
      ></div>
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-xs font-bold text-gray-700 uppercase"
        for="email"
      >
        Email
      </label>
      <input
        v-model="form.email"
        class="w-full p-2 border border-gray-400 rounded"
        type="email"
        id="email"
        name="email"
        required
      />
      <div
        v-if="errors.email"
        v-text="errors.email"
        class="text-red-500 text-xs mt-1"
      ></div>
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-xs font-bold text-gray-700 uppercase"
        for="password"
      >
        Password
      </label>
      <input
        v-model="form.password"
        class="w-full p-2 border border-gray-400 rounded"
        type="password"
        id="password"
        name="password"
        required
      />
      <div
        v-if="errors.password"
        v-text="errors.password"
        class="text-red-500 text-xs mt-1"
      ></div>
    </div>

    <div class="mb-6">
      <button
        type="submit"
        class="
          bg-blue-500
          text-white
          rounded
          py-2
          px-3
          hover:bg-blue-800 hover:border-blue-300 hover:border-2
        "
        @click="
          method = 'post';
          action = '/users';
        "
        :disabled="form.processing"
      >
        Create
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    errors: Object,
  },
  methods: {
    submit() {
      this.form.submit(this.method, this.action);
    },
  },

  data() {
    return {
      method: null,
      action: null,
      form: this.$inertia.form({
        name: "",
        email: "",
        password: "",
      }),
    };
  },
};
</script>