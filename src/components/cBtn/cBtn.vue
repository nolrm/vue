<template>
  <button
    :id="id"
    :class="btnClass"
    @click="click"
  >
  <!-- TODO icon -->
  {{ label }}
  </button>
</template>

<script>
  export default {
    name: "cBtn",
    props: {
      id: {
        type: String,
        required: false,
        description: 'Button id'
      },
      class: {
        type: String,
        required: false,
        description: 'Button custom class'
      },
      color: {
        type: String,
        required: false,
        description: 'Button colour'
      },
      label: {
        type: String,
        required: true,
        description: 'Element label'
      },
      variant: {
        type: String,
        required: false,
        description: 'Button different design. Icon, Flat and etc..'
      },
    },

    data() {
      return {
        name: 'Hello'
      }
    },

    methods: {
      click() {
        console.log('on -- Click')
        this.$emit('submit')
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
