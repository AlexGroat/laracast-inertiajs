<template>
  <Head title="Home">
    <meta
      type="description"
      content="Home information"
      head-key="description"
    />
  </Head>
  <h1 class="mx-3 my-2 font-bold text-3xl">Blog</h1>

  <div id="color">
    <pre>
    <code>
      class Example
      {
        public function __construct()
        
        { 
          //
        }
      }
    </code>
  </pre>
  </div>
  <pre>
    <code>
      class Example
      {
        public function __construct()
        
        { 
          //
        }
      }
    </code>
  </pre>
</template>

<script>
import { highlight } from "@/Services/SyntaxHighlighting";

export default {
  mounted() {
    // selector is after highlight
    highlight();
  },
};
</script>








