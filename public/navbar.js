function getNavbar() {
  return ` 
    <div class="container-fluid">
      <h1 class="display-4">Social Hub</h1>
      <ul class="nav flex-row">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="addUser.html">Add User</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="allUsers.html">Show All Users (formatted)</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="data.html">Show All Users (raw)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="deleteAllUsers.html">Delete All Users</a>
        </li>
      </ul>
    </div>`;
}
