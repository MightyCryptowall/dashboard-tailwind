export const dashboardNavbar = `
  <div class="flex justify-between mb-5" style="width: 100%">
    <div class="text-gray-600">Dashboard / Tables</div>
    <div class="flex gap-3 text-sm">
      <a href="#">Some Link</a>
      <a href="#">Sign Out</a>
    </div>
  </div>
`

export const table = `
<div class="rounded-lg overflow-hidden shadow-md">
  <div class="border w-100 overflow-x-auto border-gray-200">
    <table class="min-w-full divide-y divide-gray-200 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Author
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Function
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Status
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Employed
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Controls
          </th>
        </tr>
      </thead>

      <tbody class="divide-y bg-white divide-gray-200">
        <tr>
          <td
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            John Michael
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            Manager
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            <span class="py-1 px-2 bg-green-600 rounded text-white text-xs">Online</span>
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            23/04/18
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            <a href="#">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`

export const sideBar = `
<div class="w-1/6 py-7 bg-gray-200 text-black dashboard-sidebar">
  <div class="sidebar-links gap-7">
    <a href="#" class="sidebar-link bg-smoke-500 text-white">Dashboard</a>
    <a href="#" class="sidebar-link">Tables</a>
    <div class="sidebar-link dashboard-dropdown">
      <div class="dashboard-dropdown-button">Dropdown</div>
      <div class="dashboard-dropdown-detail flex flex-col gap-1 hide" >
        <a href="#" class="sidebar-link">Link 1</a>
        <a href="#" class="sidebar-link bg-smoke-500 text-white">Link 1</a>
        <a href="#" class="sidebar-link">Link 1</a>
      </div>
    </div>
    <a href="#" class="sidebar-link">Link</a>
  </div>
</div>
`