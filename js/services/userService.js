$(document).ready(function () {

    window.userService = function () {
        this.getAll = function (callback) {
            $.ajax({
                url: util.baseUrl,
                method: 'GET',
                success: callback,
                headers: {
                    Authorization: util.authorizationToken
                }
            });
        }

        this.create = function (user, callback) {
            $.ajax({
                url: util.baseUrl,
                method: 'POST',
                data: JSON.stringify(user),
                success: callback,
                contentType: "application/json",
                dataType: "json",
                headers: {
                    Authorization: util.authorizationToken
                }
            });
        }
    }
});