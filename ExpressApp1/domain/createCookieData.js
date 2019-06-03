class CookieData {
    constructor() {
        this.userCookie = null;
        this.fpCookie = null;
        this.permissionsCookie = null;
        this.csrfCookie = null;
        this.permissionsUserVal = null;
        this.permissionsAdminVal = null;
        this.permissionsNoneVal = null;
        this.permissionsSeperatorVal = null;
    }

    initModel(data) {
        this.userCookie = data.userCookie;
        this.fpCookie = data.fpCookie;
        this.permissionsCookie = data.permissionsCookie;
        this.csrfCookie = data.csrfCookie;
        this.permissionsUserVal = data.permissionsUserVal;
        this.permissionsAdminVal = data.permissionsAdminVal;
        this.permissionsNoneVal = data.permissionsNoneVal;
        this.permissionsSeperatorVal = data.permissionsSeperatorVal;
    }

    getUserCookie() { return this.userCookie; }

    setUserCookie(userCookie) { this.userCookie = userCookie; }

    getFpCookie() { return this.fpCookie; }

    setFpCookie(fpCookie) { this.fpCookie = fpCookie; }

    getPermissionsCookie() { return this.permissionsCookie; }

    setPermissionsCookie(permissionsCookie) { this.permissionsCookie = permissionsCookie; }

    getCsrfCookie() { return this.csrfCookie; }

    setCsrfCookie(csrfCookie) { this.csrfCookie = csrfCookie; }

    getPermissionsUserVal() { return this.permissionsUserVal; }

    setPermissionsUserVal(permissionsUserVal) { this.permissionsUserVal = permissionsUserVal; }

    getPermissionsAdminVal() { return this.permissionsAdminVal; }

    setPermissionsAdminVal(permissionsAdminVal) { this.permissionsAdminVal = permissionsAdminVal; }

    getPermissionsNoneVal() { return this.permissionsNoneVal; }

    setPermissionsNoneVal(permissionsNoneVal) { this.permissionsNoneVal = permissionsNoneVal; }

    getPermissionsSeperatorVal() { return this.permissionsSeperatorVal; }

    setPermissionsSeperatorVal(permissionsSeperatorVal) { this.permissionsSeperatorVal = permissionsSeperatorVal; }

    equals(other) {
        return other.getPermissionsCookie() == this.getPermissionsCookie()
            && other.getFpCookie() == this.getFpCookie()
            && other.getUserCookie() == this.getUserCookie()
            && other.getCsrfCookie() == this.getCsrfCookie()
            && other.getPermissionsUserVal() == this.getPermissionsUserVal()
            && other.getPermissionsNoneVal() == this.getPermissionsNoneVal()
            && other.getPermissionsSeperatorVal() == this.getPermissionsSeperatorVal()
            && other.getPermissionsAdminVal() == this.getPermissionsAdminVal();
    }

    copy(other) {
        this.setPermissionsCookie(other.getPermissionsCookie());
        this.setFpCookie(other.getFpCookie());
        this.setUserCookie(other.getUserCookie());
        this.setCsrfCookie(other.getCsrfCookie());
        this.setPermissionsUserVal(other.getPermissionsUserVal());
        this.setPermissionsNoneVal(other.getPermissionsNoneVal());
        this.setPermissionsAdminVal(other.getPermissionsAdminVal());
        this.setPermissionsSeperatorVal(other.getPermissionsSeperatorVal());
    }

    toString() {
        var start = 'public static final String ';
        var end = '";\n';

        return start + 'USER_COOKIE_NAME = "' + this.getUserCookie() + end
            + start + 'FORGOTPASSWORD_COOKIE_NAME = "' + this.getFpCookie() + end
            + start + 'CSRF_COOKIE_NAME = "' + this.getCsrfCookie() + end
            + start + 'PERMISSIONS_COOKIE_NAME = "' + this.getPermissionsCookie() + end
            + start + 'PERMISSIONS_COOKIE_USER_VALUE = "' + this.getPermissionsUserVal() + end
            + start + 'PERMISSIONS_COOKIE_ADMIN_VALUE = "' + this.getPermissionsAdminVal() + end
            + start + 'PERMISSIONS_COOKIE_NONE_VALUE = "' + this.getPermissionsNoneVal() + end
            + start + 'PERMISSIONS_COOKIE_SEPERATOR = "' + this.getPermissionsSeperatorVal() + end;
    }

    fill(newFields) {
        for (let field in newFields) {
            if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
                if (this[field] !== 'undefined') {
                    this[field] = newFields[field];
                }
            }
        }
    };

}
module.exports = CookieData;