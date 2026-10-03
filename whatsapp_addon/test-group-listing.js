const assert = require('assert');
const { WhatsappClient } = require('./whatsapp');

WhatsappClient.prototype.connect = () => {};

const client = new WhatsappClient({ path: '/tmp/does-not-matter' });
assert.strictEqual(typeof client.getGroups, 'function', 'getGroups should exist on WhatsappClient');
console.log('ok');
