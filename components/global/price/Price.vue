<template>
  <div
    class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
  >
    <div
      class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
    >
      <div class="p-8 text-3xl font-bold text-center border-b-4">
        {{ name }}
      </div>
      <ul class="w-full text-center text-sm">
        <li v-for="(item, index) in list" :key="index" class="border-b py-4">
          {{ item }}
        </li>
      </ul>
    </div>
    <div
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
    >
      <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
        {{ price }}
        <span class="text-base">{{ pricePer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
//import priceMixin from '@/mixins/price'

export default {
  name: 'Price',
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    limited: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    pricePer () {
      return this.limited ? 'for one user' : '/ per user'
    }
  }
}

/*export default {
  name: 'Price',
  mixins: [priceMixin]
}*/
</script>
