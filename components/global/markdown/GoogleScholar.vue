<template>
  <p v-if="$fetchState.pending">Fetching crossref ...</p>
  <p v-else-if="$fetchState.error">Could not fetch crossref resources.</p>
  <div v-else>
    <p><b>Publications (fetched from <a href="https://www.crossref.org/">crossref.org</a>):</b></p>
    <ul>
      <li :key="item.DOI" v-for="item of crossref.message.items">
        <a :href="item.URL">{{ item.title[0] }}</a> 
        <span class="font-thin"> 
            ({{ item["container-title"][0] }}, {{ item.created["date-parts"][0][0] }})
        </span>
        <br/>
        <span 
        class="text-sm"
        v-for="author of item.author" 
        :key="author.DOI" 
        :class="author.family == 'Oberreiter' ? 'text-yellow-600 font-bold':''"
        >
            | {{author.given}} {{author.family}}
        </span>
        <span
        class="text-sm"
        v-if="item['is-referenced-by-count'] > 0"
        >
            <br/>
            Citations: {{ item["is-referenced-by-count"] }}
        </span>
      </li>
    </ul>
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        crossref: []
      }
    },
    async fetch() {
      // https://github.com/CrossRef/rest-api-doc#parameters
      this.crossref = await fetch(
        'https://api.crossref.org/works?filter=orcid:0000-0003-1019-1245&mailto=hoberreiter@gmail.com'
      ).then(res => res.json())
    }
  }
</script>