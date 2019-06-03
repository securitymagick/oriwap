class AdminDatabaseEntry {
    constructor() {
        this.id = null;
        this.name = null;
        this.value = null;
    }
    initModel(data) {
        this.id = data.id;
        this.name = data.name;
        this.value = data.value;
    }

    setId(id) { this.id = id; }

    getId() { return this.id; }

    setName(name) { this.name = name; }

    getName() { return this.name; }

    setValue(value) { this.value = value; }

    getValue() { return this.value; }

    equals(other) {
        return this.getId() == other.getId()
            && this.getName() == other.getName()
            && this.getValue() == other.getValue();      
    }

    copy(other) {
        this.setId(other.getId());
        this.setName(other.getName());
        this.setValue(other.getValue());
    }

    toString() {
        var start = 'INSERT INTO admin VALUES (';
        return start + this.getId() + ', \'' + this.getName() + '\', \'' + this.getValue() + '\');';
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
module.exports = AdminDatabaseEntry;