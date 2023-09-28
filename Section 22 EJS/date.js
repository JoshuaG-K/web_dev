//jshint esversion:6

const locale = "en-US";

exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    return today.toLocaleDateString(locale, options);
}

exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString(locale, options);
}