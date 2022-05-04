<template>
  <Head title="My App">
    <meta
      type="description"
      content="Information about my app"
      head-key="description"
    />
  </Head>
  <section>
    <header class="flex bg-gray-200 p-3 justify-between">
      <div class="flex items-center">
        <h1 class="font-bold text-lg mx-3 my-2">My App</h1>

        <p class="text-sm">Welcome Back, {{ username }}!</p>
      </div>
      <Nav class="mr-4" />
    </header>
  </section>

  <section class="p-6">
    <div class="max-w-2xl mx-auto">
      <slot />
    </div>
  </section>
</template>

<script>
import Nav from "@/Pages/Shared/Nav.vue";

export default {
  components: {
    Nav,
  },

  computed: {
    username() {
      return this.$page.props.auth.user.username;
    },
  },
};
</script>