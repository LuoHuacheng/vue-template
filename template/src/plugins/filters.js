export const toThousands = (num) => {
  var num = (num || 0).toString(), result = '';
  while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
  }
  if (num) { result = num + result }
  return result;
};

export const timeAgo = (time) => {
  const between = (Date.now() - Date.parse(time)) / 1000;
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时');
  } else if (between < 2592000) {
    return pluralize(~~(between / 86400), ' 天');
  } else if (between < 31536000) {
    return pluralize(~~(between / 2592000), ' 月');
  } else {
    return pluralize(~~(between / 31104000), ' 年');
  }
}

function pluralize(time, label) {
  return time + label + '前';
}
