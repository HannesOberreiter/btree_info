<template>
  <section class="py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <price name="Free" price="£0" :limited="false" :list="listBasic" />
        <price-highlighted
          name="Pro"
          price="x.99"
          :limited="false"
          :list="listPro"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Price from '@/components/global/price/Price'
import PriceHighlighted from '@/components/global/price/PriceHighlighted'

export default {
  name: 'Prices',
  components: {
    price: Price,
    'price-highlighted': PriceHighlighted
  },
  data () {
    return {
      listBasic: ['Thing', 'Thing', 'Thing', 'Thing'],
      listPro: ['Thing', 'Thing', 'Thing', 'Thing', 'Thing']
    }
  }
}
</script>
