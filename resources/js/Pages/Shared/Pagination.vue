<template>
  <div>
    <Component
      :is="link.url ? 'Link' : 'span'"
      v-for="link in links"
      :href="link.url"
      v-html="link.label"
      class="px-1"
      :class="{ 'text-gray-500': !link.url, 'font-bold': link.active }"
    />
  </div>
</template>

  <!--     
    <template v-for="link in users.links"> -->
  <!-- diving into vue dom to access user properties -->
  <!-- <Link v-if="link.url" :href="link.url" v-html="link.label"></Link>

      <span class="text-gray-300" v-else v-html="link.label"></span>
    </template> -->
  <!-- </div> -->

<script>
export default {
  props: {
    links: Array,
  },
};
</script>