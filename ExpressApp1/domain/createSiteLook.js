class SiteLook {
    constructor() {
        this.year = '2016';
        this.url = 'my-insecure-app';
        this.title = 'My Insecure App';
        this.fontColor = 'MediumVioletRed';
        this.glyphSize = '24';
        this.logoSize = '2';
        this.menuCols = 'col-md-5 col-md-offset-1 col-xs-6';
        this.preLogoText = 'My Insecure ';
        this.logoGlyphOne = 'glyphicon-phone';
        this.logoGlyph2 = '';
        this.logoGlyph3 = '';
        this.logoGlyph4 = '';
        this.labelCols = 'col-md-4';
        this.formCols = 'col-md-6';
        this.favorite = 'Secret';
        this.addWhat = 'Post';
    }

    initModel(data) {
        this.year = data.year;
        this.url = data.url;
        this.title = data.title;
        this.fontColor = data.fontColor;
        this.glyphSize = data.glyphSize;
        this.logoSize = data.logoSize;
        this.menuCols = data.menuCols;
        this.preLogoText = data.preLogoText;
        this.logoGlyphOne = data.logoGlyphOne;
        this.logoGlyph2 = data.logoGlyph2;
        this.logoGlyph3 = data.logoGlyph3;
        this.logoGlyph4 = data.logoGlyph4;
        this.labelCols = data.labelCols;
        this.formCols = data.formCols;
        this.favorite = data.favorite;
        this.addWhat = data.addWhat;
    }

    getYear() { return this.year;}
    setYear(year) { this.year = year; }

    getUrl() { return this.url; }
    setUrl(url) { this.url = url;}

    getTitle() { return this.title; }
    setTitle(title) { this.title = title; }

    getFontColor() { return this.fontColor; }
    setFontColor(fontColor) { this.fontColor = fontColor; }

    getGlyphSize() { return this.glyphSize; }
    setGlyphSize(glyphSize) { this.glyphSize = glyphSize; }

    getLogoSize() { return this.logoSize; }
    setLogoSize(logoSize) { this.logoSize = logoSize; }

    getMenuCols() { return this.menuCols; }
    setMenuCols(menuCols) { this.menuCols = menuCols; }

    getPreLogoText() { return this.preLogoText; }
    setPreLogoText(preLogoText) { this.preLogoText = preLogoText; }

    getLogoGlyphOne() { return this.logoGlyphOne; }
    setLogoGlyphOne(logoGlyphOne) { this.logoGlyphOne = logoGlyphOne; }

    getLogoGlyph2() { return this.logoGlyph2; }
    setLogoGlyph2(logoGlyph2) { this.logoGlyph2 = logoGlyph2; }

    getLogoGlyph3() { return this.logoGlyph3; }
    setLogoGlyph3(logoGlyph3) { this.logoGlyph3 = logoGlyph3; }

    getLogoGlyph4() { return this.logoGlyph4; }
    setLogoGlyph4(logoGlyph4) { this.logoGlyph4 = logoGlyph4; }

    getLabelCols() { return this.labelCols; }
    setLabelCols(labelCols) { this.labelCols = labelCols; }

    getFormCols() { return this.formCols; }
    setFormCols(formCols) { this.formCols = formCols; }

    getFavorite() { return this.favorite; }
    setFavorite(favorite) { this.favorite = favorite; }

    getAddWhat() { return this.addWhat; }
    setAddWhat(addWhat) { this.addWhat = addWhat; }

    copy(other) {
        this.setYear(other.getYear());
        this.setUrl(other.getUrl());
        this.setTitle(other.getTitle());
        this.setFontColor(other.getFontColor());
        this.setGlyphSize(other.getGlyphSize());
        this.setLogoSize(other.getLogoSize());
        this.setMenuCols(other.getMenuCols());
        this.setPreLogoText(other.getPreLogoText());
        this.setLogoGlyphOne(other.getLogoGlyphOne());
        this.setLogoGlyph2(other.getLogoGlyph2());
        this.setLogoGlyph3(other.getLogoGlyph3());
        this.setLogoGlyph4(other.getLogoGlyph4());
        this.setLabelCols(other.getLabelCols());
        this.setFormCols(other.getFormCols());
        this.setFavorite(other.getFavorite());
        this.setAddWhat(other.getAddWhat());
    }

    toString() {
        return "INSERT INTO sitelook VALUES(1, '" + this.getTitle() + "', '" + this.getFontColor()
            + "', " + this.getGlyphSize() + ", " + this.getLogoSize() + ", '" + this.getMenuCols()
            + "', '" + this.getPreLogoText() + "', '" + this.getLogoGlyphOne() + "', '"
            + this.getLogoGlyph2() + "', '" + this.getLogoGlyph3() + "', '" + this.getLogoGlyph4()
            + "', '" + this.getLabelCols() + "', '" + this.getFormCols() + "', '" + this.getUrl()
            + "', " + this.getYear() + ", '" + this.getFavorite() + "', '" + this.getAddWhat() + "');";
    }

    toModifyString() {
        var start = '<br>';
        var middlefront = ':<br><input type="text" name="';
        var middlewarning = ':<br><input type="text" style = "color:red;" name="';

        var middleback = '" value="';
        var end = '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';
        let contents = '';

        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                if (property == 'title' || property == 'url' || property == 'year') {
                    contents = contents + start + property + middlewarning + property + middleback + this[property] + end;
                } else {
                    contents = contents + start + property + middlefront + property + middleback + this[property] + end;
                }
            }
            
        }
        return contents + submitHtml;

    }

    setValue(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        }
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
module.exports = SiteLook;