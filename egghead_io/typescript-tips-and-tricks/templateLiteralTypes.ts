function handler(eventType: `on${string}`) {
  console.log(`handling ${eventType}`);
}

handler('onClick');
handler('onKeyDown');
handler('onKeyUp');
handler('onEnter');
handler('onClicker');
// handler('escapeKey');
