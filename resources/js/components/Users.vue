<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <div class="card">
          <div class="card-header p-3">
            <h3 class="card-title">Users Management</h3>

            <div class="card-tools">
              <button class="btn btn-success" data-toggle="modal" data-target="#Addnew">
                <i class="fas fa-user-plus"></i>
                Add new User
              </button>
              <!-- Add new user modal -->

              <div
                class="modal fade"
                id="Addnew"
                tabindex="-1"
                role="dialog"
                aria-labelledby="AddnewLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="AddnewLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form @submit.prevent="createUser">
                      <div class="modal-body">
                        <div class="form-group">
                          <input
                            v-model="form.name"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Add The Name"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('name') }"
                          />
                          <has-error :form="form" field="name"></has-error>
                        </div>
                        <div class="form-group">
                          <input
                            v-model="form.email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Type the email address"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('email') }"
                          />
                          <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="form-group">
                          <textarea
                            v-model="form.bio"
                            id="bio"
                            name="bio"
                            placeholder="Bio ...."
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('bio') }"
                          />
                          <has-error :form="form" field="bio"></has-error>
                        </div>
                        <div class="form-group">
                          <select
                            v-model="form.type"
                            id="type"
                            name="type"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('type') }"
                          >
                            <option value>-- Select User Roles --</option>
                            <option value="admin">Admin</option>
                            <option value="author">Author</option>
                            <option value="user">Standard User</option>
                          </select>
                          <has-error :form="form" field="type"></has-error>
                        </div>
                        <div class="form-group">
                          <input
                            v-model="form.password"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Type a Password"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('password') }"
                          />
                          <has-error :form="form" field="password"></has-error>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Create</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registred At</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name| upText }}</td>
                  <td>{{ user.email }}</td>

                  <td>
                    <span class="tag tag-success">{{ user.type| upText}}</span>
                  </td>
                  <td>{{user.created_at | myDate }}</td>
                  <td>
                    <a href="#">
                      <i class="fas fa-edit green"></i>
                    </a>
                    /
                    <a href="#">
                      <i class="fas fa-trash red"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {},
      form: new Form({
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      })
    };
  },
  methods: {
    createUser() {
      this.$Progress.start();
      this.form.post("api/user");
      this.$Progress.finish();
    },

    loadUser() {
      axios.get("api/user").then(({ data }) => (this.users = data.data));
    }
  },
  created() {
    this.loadUser();
  }
};
</script>
