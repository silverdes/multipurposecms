<style>
</style>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <section class="content" style="width: 100%;">
        <div class="container mt-3">
          <div class="row">
            <div class="col-lg-3">
              <!-- Profile Image -->
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                  <div class="text-center">
                    <img
                      class="profile-user-img img-fluid img-circle"
                      src="#"
                      alt="User profile picture"
                    />
                  </div>

                  <h3 class="profile-username text-center">Nina Mcintire</h3>

                  <p class="text-muted text-center">Software Engineer</p>

                  <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>Followers</b>
                      <a class="float-right">1,322</a>
                    </li>
                    <li class="list-group-item">
                      <b>Following</b>
                      <a class="float-right">543</a>
                    </li>
                    <li class="list-group-item">
                      <b>Friends</b>
                      <a class="float-right">13,287</a>
                    </li>
                  </ul>

                  <a href="#" class="btn btn-primary btn-block">
                    <b>Follow</b>
                  </a>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->

              <!-- About Me Box -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">About Me</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <strong>
                    <i class="fas fa-book mr-1"></i> Education
                  </strong>

                  <p
                    class="text-muted"
                  >B.S. in Computer Science from the University of Tennessee at Knoxville</p>

                  <hr />

                  <strong>
                    <i class="fas fa-map-marker-alt mr-1"></i> Location
                  </strong>

                  <p class="text-muted">Malibu, California</p>

                  <hr />

                  <strong>
                    <i class="fas fa-pencil-alt mr-1"></i> Skills
                  </strong>

                  <p class="text-muted">
                    <span class="tag tag-danger">UI Design</span>
                    <span class="tag tag-success">Coding</span>
                    <span class="tag tag-info">Javascript</span>
                    <span class="tag tag-warning">PHP</span>
                    <span class="tag tag-primary">Node.js</span>
                  </p>

                  <hr />

                  <strong>
                    <i class="far fa-file-alt mr-1"></i> Notes
                  </strong>

                  <p
                    class="text-muted"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="card">
                <div class="card-header p-2">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a class="nav-link" href="#activity" data-toggle="tab">Activity</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="#settings" data-toggle="tab">Settings</a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane" id="activity">
                      <!-- Post -->
                      <div class="post">
                        <div class="user-block">
                          <img class="img-circle img-bordered-sm" src alt="user image" />
                          <span class="username">
                            <a href="#">Jonathan Burke Jr.</a>
                            <a href="#" class="float-right btn-tool">
                              <i class="fas fa-times"></i>
                            </a>
                          </span>
                          <span class="description">Shared publicly - 7:30 PM today</span>
                        </div>
                        <!-- /.user-block -->
                        <p>
                          Lorem ipsum represents a long-held tradition for designers,
                          typographers and the like. Some people hate it and argue for
                          its demise, but others ignore the hate as they create awesome
                          tools to help create filler text for everyone from bacon lovers
                          to Charlie Sheen fans.
                        </p>

                        <p>
                          <a href="#" class="link-black text-sm mr-2">
                            <i class="fas fa-share mr-1"></i> Share
                          </a>
                          <a href="#" class="link-black text-sm">
                            <i class="far fa-thumbs-up mr-1"></i> Like
                          </a>
                          <span class="float-right">
                            <a href="#" class="link-black text-sm">
                              <i class="far fa-comments mr-1"></i> Comments (5)
                            </a>
                          </span>
                        </p>

                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="Type a comment"
                        />
                      </div>
                      <!-- /.post -->
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="timeline"></div>
                    <!-- /.tab-pane -->

                    <div class="tab-pane active" id="settings">
                      <form class="form-horizontal">
                        <div class="form-group row">
                          <label for="inputName" class="col-lg-12 col-form-label">Name</label>
                          <div class="col-lg-12">
                            <input
                              v-model="form.name"
                              type="email"
                              class="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputEmail" class="col-lg-2 col-form-label">Email</label>
                          <div class="col-lg-12">
                            <input
                              v-model="form.email"
                              :class="{ 'is-invalid' : form.errors.has('email')}"
                              type="email"
                              class="form-control"
                              id="inputEmail"
                              placeholder="Email"
                            />
                            <has-error :form="form" field="email"></has-error>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputExperience" class="col-lg-2 col-form-label">Experience</label>
                          <div class="col-lg-12">
                            <textarea
                              class="form-control"
                              id="inputExperience"
                              placeholder="Experience"
                              v-model="form.bio"
                            ></textarea>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputPassport" class="col-lg-12 col-form-label">Profile photo</label>
                          <div class="custom-file">
                            <input
                              type="file"
                              @change="updateProfile"
                              class="custom-file-input"
                              id="photo"
                              name="photo"
                            />
                            <label class="custom-file-label" for="customFile">Choose file</label>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputPassport" class="col-lg-12 col-form-label">
                            Passport
                            <small>(leave empty if not changing)</small>
                          </label>
                          <div class="col-lg-12">
                            <input
                              type="text"
                              class="form-control"
                              name="password"
                              v-model="form.password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-lg-12">
                            <button
                              type="submit"
                              @click.prevent="updateInfo"
                              class="btn btn-success"
                            >Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      })
    };
  },
  mounted() {
    console.log("Component mounted");
  },
  methods: {
    updateInfo() {
      this.$Progress.start();
      this.form
        .put("api/profile")
        .then(() => {
          this.$Progress.finish();
          toast.fire({
            icon: "success",
            title: "Updated successfully"
          });
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },

    updateProfile(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      let limit = 1024 * 1024 * 2;
      if (file["size"] > limit) {
        swal({
          type: "error",
          title: "Oops...",
          text: "You are uploading a large file"
        });
        return false;
      }
      reader.onloadend = file => {
        this.form.photo = reader.result;
      };
      reader.readAsDataURL(file);
    }
  },

  created() {
    axios.get("api/profile").then(({ data }) => this.form.fill(data));
  }
};
</script>
