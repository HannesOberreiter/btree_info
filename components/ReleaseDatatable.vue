<template>
  <table
    id="news"
    class="hitespace-nowrap stripe"
    style="margin-top: 0 rem; margin-bottom: 0 rem"
  >
    <thead>
      <tr>
        <th>Version</th>
        <th>Changes</th>
      </tr>
    </thead>
    <tbody></tbody>
    <tfoot>
      <tr>
        <th>Version</th>
        <th>Changes</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const table_id = "#news";
const ajax_src = "https://www.btree.at/app/news.json?timestamp=" + Date.now();

export default {
  mounted() {
    $(table_id).dataTable({
      lengthMenu: [
        [10, 15, -1],
        [10, 15, "All"],
      ],
      scrollX: true,
      autowidth: true,
      processing: true,
      // mark: true,
      sorting: [[0, "desc"]],
      ajax: ajax_src,
      columns: [
        {
          data: "date",
          render(data, type, row) {
            const r = `<b>${row.date}</b><br/>${row.version}`;
            return r;
          },
          className: "whitespace-nowrap align-top",
        },
        {
          data: "news",
          render(data, type, row) {
            let r = data.toString();
            if (type === "display") {
              r = r.replace(/,-/gm, "-");
            }
            return r;
          },
        },
      ],
    });
  },
};
</script>

<style>

table th {
  text-align: left;
}

.dark-mode table.dataTable thead th {
  border-bottom-color: white;
}

.dark-mode .dataTables_filter,
.dark-mode .dataTables_processing,
.dark-mode .dataTables_paginate,
.dark-mode .dataTables_length {
  color: white !important;
}

.dark-mode select,
.dark-mode input {
  background-color: #1a202c;
}

.dark-mode .odd {
  background-color: rgb(255, 204, 102, 0.01) !important;
}

.dark-mode .even {
  background-color: rgb(255, 204, 102, 0) !important;
}
</style>
