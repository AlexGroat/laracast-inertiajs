<template>
  <Head title="Users"> </Head>
  <h1 class="mx-3 my-2 font-bold text-3xl">Users</h1>

  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    users: Array,
  },
};
</script>