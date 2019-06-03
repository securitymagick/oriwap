class MenuItem {
    constructor() {
        this.id = null;
        this.menu = null;
        this.order = null;
        this.title = null;
        this.url = null;
        this.glyphicon = null;
        this.additional = null;
    }

    initModel(data) {
        this.id = data.id;
        this.menu = data.menu;
        this.order = data.order;
        this.title = data.title;
        this.url = data.url;
        this.glyphicon = data.glyphicon;
        this.additional = data.additional;
    }

    getId() { return this.id; }

    setId(id) { this.id = id;}

    getMenu() { return this.menu; }

    setMenu(menu) { this.menu = menu; }

    getOrder() { return this.order; }

    setOrder(order) { this.order = order; }

    getTitle() { return this.title; }

    setTitle(title) { this.title = title; }

    getUrl() { return this.url; }

    setUrl(url) { this.url = url; }

    getGlyphicon() { return this.glyphicon; }

    setGlyphicon(glyphicon) { this.glyphicon = glyphicon; }

    getAdditional() { return this.additional; }

    setAdditional(additional) { this.additional = additional; }


    equals(other) {
        return other.getId() == this.getId()
            && other.getMenu() == this.getMenu()
            && other.getOrder() == this.getOrder()
            && other.getTitle() == this.getTitle()
            && other.getUrl() == this.getUrl()
            && other.getGlyphicon() == this.getGlyphicon()
            && other.getAdditional() == this.getAdditional();
    }

    copy(other) {
        this.setId(other.getId());
        this.setMenu(other.getMenu());
        this.setOrder(other.getOrder());
        this.setTitle(other.getTitle());
        this.setUrl(other.getUrl());
        this.setGlyphicon(other.getGlyphicon());
        this.setAdditional(other.getAdditional());
    }

    toString() {
        return 'INSERT INTO menu VALUES(' + this.getId() + ', \'' + this.getMenu() + '\', ' + this.getOrder() + ', \'' + this.getTitle() + '\', \'' + this.getUrl() + '\', \'' + this.getGlyphicon() + '\', \'' + this.getAdditional() + '\');';
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
module.exports = MenuItem;