$(document).ready(function () {
    var vue = new Vue({
        el: "#app",
        data: {
            users: [],
            user: {},
            service: new userService(),
            formActive: true
        },
        methods: {
            openForm: function () {
                this.formActive = true;
            },
            getAllUsers: function () {
                var self = this;

                this.service.getAll(function (users) {
                    self.users = users.data;
                });
            },
            createUser: function () {
                var self = this;

                this.service.create(this.user, function () {
                    self.getAllUsers();

                    self.user.name = null;
                    self.user.userName = null;
                    self.user.contactEmail = null;
                    self.user.password = null;
                });
            }
        },
        created: function () {
            this.getAllUsers();
        }
    });
});