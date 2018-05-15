export const toThousands = (num) => {
  let numStr = (num || 0).toString();
  let result = '';
  while (numStr.length > 3) {
    result = `, ${numStr.slice(-3) + result}`;
    numStr = numStr.slice(0, numStr.length - 3);
  }
  if (numStr) {
    result = numStr + result;
  }
  return result;
};


function pluralize(time, label) {
  return `${time + label} 前`;
}

export const timeAgo = (time) => {
  const between = (Date.now() - Date.parse(time)) / 1000;
  let timeStr = '';
  if (between < 3600) {
    timeStr = pluralize(Math.floor(between / 60), ' 分钟');
  } else if (between < 86400) {
    timeStr = pluralize(Math.floor(between / 3600), ' 小时');
  } else if (between < 2592000) {
    timeStr = pluralize(Math.floor(between / 86400), ' 天');
  } else if (between < 31536000) {
    timeStr = pluralize(Math.floor(between / 2592000), ' 月');
  } else {
    timeStr = pluralize(Math.floor(between / 31104000), ' 年');
  }
  return timeStr;
};

