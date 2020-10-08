<template>
  <table
          id="news"
          class="display nowrap stripe hover"
          style="margin-top: 0rem; margin-bottom: 0rem;"
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
const ajax_src = "https://www.btree.at/app/news.json?timestamp="+Date.now();

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
      mark: true,
      sorting: [[0, "desc"]],
      ajax: ajax_src,
      columns: [
        {
          data: "date",
          render: function (data, type, row) {
            let r = `<b>${row.date}</b><br/>${row.version}`;
            return r;
          },
          className: "nowrap",
        },
        {
          data: "news",
          render: function (data, type, row) {
            let r = data.toString();
            if (type === "display") {
              r = r.replace(/,-/gm, "-");
            }
            return r;
          },
        },
      ],
    });
  }
}
</script>

<style>
/*Titels*/
table th {
  text-align: left;
}
.dark-mode table.dataTable thead th {
  border-bottom-color: white;
}

/*TextColor*/
.dark-mode .dataTables_filter,
.dark-mode .dataTables_processing,
.dark-mode .dataTables_paginate,
.dark-mode .dataTables_length {
  color: white!important;
}
.dark-mode select,
.dark-mode input {
  background-color: #1a202c;
}

/*Background Color*/
.dark-mode .odd {
  background-color: rgb(255, 204, 102, 0.01) !important;
}
.dark-mode .even {
  background-color: rgb(255, 204, 102, 0) !important;
}
.sorting_1 {
  background-color: rgb(255, 153, 51, 0) !important;
}
/*Form fields*/
.dataTables_wrapper select,
.dataTables_wrapper .dataTables_filter input {
  padding-left: 1rem; /*pl-4*/
  padding-right: 1rem; /*pl-4*/
  padding-top: 0.5rem; /*pl-2*/
  padding-bottom: 0.5rem; /*pl-2*/
  line-height: 1.25; /*leading-tight*/
  border-width: 2px; /*border-2*/
  border-radius: 0.25rem;
  border-color: #edf2f7; /*border-gray-200*/
}

/*Pagination Buttons*/
.dataTables_wrapper .dataTables_paginate .paginate_button {
  font-weight: 700; /*font-bold*/
  border-radius: 0.25rem; /*rounded*/
  border: 1px solid transparent; /*border border-transparent*/
}

/*Pagination Buttons - Current selected */
.dataTables_wrapper .dataTables_paginate .paginate_button.current {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /*shadow*/
  font-weight: 700; /*font-bold*/
  border-radius: 0.25rem; /*rounded*/
  background: #667eea !important; /*bg-indigo-500*/
  border: 1px solid transparent; /*border border-transparent*/
}

/*Pagination Buttons - Hover */
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #fff !important; /*text-white*/
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /*shadow*/
  font-weight: 700; /*font-bold*/
  border-radius: 0.25rem; /*rounded*/
  background: #667eea !important; /*bg-indigo-500*/
  border: 1px solid transparent; /*border border-transparent*/
}
</style>
