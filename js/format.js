const locale = "ru-RU";

export function formatText(text) {
    return typeof text != "undefined" && text != null ? text : 'n/a';
}

export function formatDate(date) {
    return typeof date != "undefined" && date != null ? (new Date(date)).toLocaleString(locale, {dateStyle:"short"}) : 'n/a';
}




