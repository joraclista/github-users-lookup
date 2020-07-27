const locale = 'ru-RU';

export function formatText(text) {
  return text == null ? 'n/a' : text;
}

export function formatDate(date) {
  if (date == null) {
    return 'n/a';
  }
  return (new Date(date)).toLocaleString(locale, {dateStyle: 'short'});
}
