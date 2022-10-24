<template>
  <button
    :id="id"
    :class="btnClass"
    @click="click"
  >
  {{ label }}
  </button>
</template>

<script>
  export default {
    name: "btn",
    props: {
      id: {
        type: String,
        required: false
      },
      class: {
        type: String,
        required: false,
      },
      color: {
        type: String,
        required: false,
      },
      label: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        name: 'Hello'
      }
    },

    methods: {
      click: () => {
        console.log('on -- Click')
        // this.$emit('submit')
      }
    },

    computed: {
      btnClass() {
        let colorClass = '';

        switch (this.color) {
          case 'primary':
            colorClass = 'btn btn-primary';
            break;
          case 'info':
            colorClass = 'btn btn-info';
            break;
          case 'danger':
            colorClass = 'btn btn-danger';
            break;
          case 'warning':
            colorClass = 'btn btn-warning';
            break;
          default:
            colorClass = 'btn btn-default';
        }

        if (this.class) {
          colorClass += ' ' + this.class;
        }

        return colorClass;
      },
    }

  };
</script>
