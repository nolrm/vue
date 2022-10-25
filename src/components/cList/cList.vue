<template>
  <div class="c-list" v-for="(item, index) in items">
    <h3>
      {{ index }} {{ item.name }}
      <small>
        {{ item.code }}
      </small>
    </h3>
  </div>
</template>

<script>
  export default {
    name: "cList",
    props: {
      class: {
        type: String,
        required: false,
        description: 'Elem class'
      },
      list: {
        type: Array,
        description: 'Description goes here'
      },
    },

    data() {
      return {
        name: 'Hello'
      }
    },

    methods: {
      click() {
        // console.log('on -- Click')
      }
    },

    computed: {
      items() {
        console.log('this.list --- ', this.list)
        return this.list;
      },
    }
  };
</script>
