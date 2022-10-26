<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import cList from '../components/cList/cList.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <h1>Test view</h1>

    <div>
      {{ twoSum(arr1, 5) }}
    </div>

    <div>
      {{ twoSum(arr2, -5) }}
    </div>

  </main>
</template>


<script>
  export default {
    name: "TestView",
    props: {},

    data() {
      return {
        arr1: [1,2,3,4],
        arr2: [1,2,3,4,5]
      }
    },

    // computed: {
      
    // },

    methods: {
      twoSum(nums, target) {
        let total = 0;
        let newArray = [];

        for (const i in nums) {          
          let index2 = nums.findIndex((second) => nums[i] + second == target)

          console.log(index2)

          if (index2 > 0) {
            newArray.push(parseInt(i), index2)
            return newArray;
          } else if (i >= (nums.length - 1)) {
            newArray.push(-1, -1)
            return newArray;
          }
        }
      }
    }
  };
</script>
