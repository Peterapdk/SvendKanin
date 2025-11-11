// Example Kilo code integration
const kilo = require('kilocode');

function trackRabbitEvent(event) {
  kilo.track("rabbit_event", event);
}

module.exports = { trackRabbitEvent };