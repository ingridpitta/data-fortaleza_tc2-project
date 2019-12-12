class ForumUiModel {
    docData;
    id;
    imageUrl;
    answersCount;
    likesCount;
    description;
    tag;
    title;
    author;

    constructor(props) {
        this.id = props.id;
        this.docData = props.data();
        this.imageUrl = this.getImageUrl();
        this.answersCount = this.getAnswersCount();
        this.likesCount = this.getLikesCount();
        this.description = this.getDescription();
        this.title = this.getTitle();
        this.tag = this.getTag();
        this.author = this.getAuthor() + " - " + this.getTime();
    }

    getImageUrl = () => this.docData.user_profile;

    getAnswersCount = () => this.docData.discussion.length;

    getLikesCount = () => this.docData.likes;

    getDescription = () => toCamelCaseString(this.docData.description);

    getTitle = () => toCamelCaseString(this.docData.title);

    getTag = () => this.docData.tag.toUpperCase();

    getAuthor = () => "Por " + this.docData.user_name;

    getTime = () => this.docData.createdAt.toDate().toLocaleString();

}

function convertToString(input) {
    if (input) {
        if (typeof input === "string") {
            return input;
        }
        return String(input);
    }
    return '';
}

function toWords(input) {
    input = convertToString(input);
    const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    return input.match(regex);
}

function toCamelCase(inputArray) {
    let result = "";
    for (let i = 0, len = inputArray.length; i < len; i++) {
        let currentStr = inputArray[i];
        let tempStr = currentStr.toLowerCase();
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
        result = result + " " + tempStr;
    }
    return result;
}

export function toCamelCaseString(input) {
    return toCamelCase(toWords(input))
}

export default ForumUiModel