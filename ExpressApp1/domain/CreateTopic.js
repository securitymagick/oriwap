class Topic {
    constructor() {
        this.mainTopic = null;
        this.secondaryTopic = null;
        this.topicModifier = null;
        this.baseTopic = null;
        this.topic = null;
    }
    initModel(data) {
        this.mainTopic = data.mainTopic;
        this.secondaryTopic = data.secondaryTopic;
        this.topicModifier = data.topicModifier;
        this.setTopic();
    }

    getMainTopic() { return this.mainTopic; }

    setMainTopic(mainTopic) { this.mainTopic = mainTopic; }

    getSecondaryTopic() { return this.secondaryTopic; }

    setSecondaryTopic(secondaryTopic) { this.secondaryTopic = secondaryTopic; }

    getTopicModifier() { return this.topicModifier; }

    setTopicModifier(topicModifier) { this.topicModifier = topicModifier; }

    setTopic() {
        let temp = this.getMainTopic();
        if (this.getSecondaryTopic().startsWith("from ")) {
            temp += " " + this.getSecondaryTopic();
        } else if (this.getSecondaryTopic() != null && this.getSecondaryTopic() != "") {
            temp = this.getSecondaryTopic() + " " + temp;
        }
        this.topic = temp;
        if (this.getTopicModifier().startsWith("to ") || this.getTopicModifier().startsWith("for ")) {
            this.topic +=  " " + this.getTopicModifier();
        } else if (this.getTopicModifier() != null && this.getTopicModifier() != "") {
            this.topic = this.getTopicModifier() + " " + this.topic;
        }
        this.baseTopic = temp.toLowerCase();
    }

    getTopic() { return this.topic; }

    getBaseTopic() { return this.baseTopic;}

    equals(otherTopic) {
        return otherTopic.getMainTopic() == this.getMainTopic()
            && otherTopic.getSecondaryTopic() == this.getSecondaryTopic()
            && otherTopic.getTopicModifier() == this.getTopicModifier();
    }

    copy(otherTopic) {
        this.setMainTopic(otherTopic.getMainTopic());
        this.setSecondaryTopic(otherTopic.getSecondaryTopic());
        this.setTopicModifier(otherTopic.getTopicModifier());
        this.setTopic();
    }

    toString() {
        return this.getTopic();
    }

    toModifyString() {
        let mainTopicHtml = '<p style="color:red;">Changing the Main Topic may have unexpected results, like crashing, null, and nonsense.</p><br>Main Topic: <br><input type="text" style="color:red;" name="mainTopic" value="' + this.getMainTopic() + '">';
        let secondaryTopicHtml = '<br>Secondary Topic:<br><input type="text" name="secondaryTopic" value="' + this.getSecondaryTopic() + '">';
        let topicModifierHtml = '<br>Topic Modifeir:<br><input type="text" name="topicModifier" value="' + this.getTopicModifier() + '">';
        let submitHtml = '<br><br><input type="submit" value="Submit">';
        return mainTopicHtml + secondaryTopicHtml + topicModifierHtml + submitHtml;
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
module.exports = Topic;

let topic1 = new Topic();
topic1.initModel({ mainTopic: 'Robots', secondaryTopic: 'from Doctor Who', topicModifier: 'Amazing' });
console.log(topic1.toString());
// 100
let topic2 = new Topic();
topic2.initModel({ mainTopic: 'Temple Cats', secondaryTopic: 'Roman', topicModifier: 'to Delight' });
console.log(topic2.toString());

let topic3 = new Topic();
topic3.initModel({ mainTopic: 'Cute Cats', secondaryTopic: '', topicModifier: 'Overpowering' });
console.log(topic3.toString());