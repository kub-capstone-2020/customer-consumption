import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | customers/customer/meter', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:customers/customer/meter');
    assert.ok(route);
  });
});
