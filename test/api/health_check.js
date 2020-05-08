const expect = require('chai').expect;

describe('health_check.js', function() {
  describe('#get()', function() {
    it('should send GET request to get all components, include overall statuses', function() {
      const response = {
        status: 'healthy',
        checks: [
          {
            componentName: 'Cassandra backend',
            escapedComponentName: 'Cassandra%20backend',
            status: 'healthy',
            cause: null
          }
        ]
      };
      this.mock.onGet('/healthcheck').reply(200, response);
      return expect(this.client.healthCheck.get()).to.eventually.deep.equal(response);
    });
  });

  describe('#getOneComponent()', function() {
    it('should send GET request to get one component health status', function() {
      const componentName = 'Cassandra backend';
      const query = 'Cassandra%20backend';
      const response = {
        componentName: 'Cassandra backend',
        escapedComponentName: 'Cassandra%20backend',
        status: 'healthy',
        cause: null
      };
      this.mock.onGet(`/healthcheck/${query}`).reply(200, response);
      return expect(this.client.healthCheck.getOneComponent(componentName)).to.eventually.deep.equal(response);
    });
  });

  describe('#listAllHealthChecks()', function() {
    it('should send GET request to list all components available for health checks', function() {
      const response = [
        {
          componentName: 'Cassandra backend',
          escapedComponentName: 'Cassandra%20backend'
        }
      ];
      this.mock.onGet('/healthcheck/checks').reply(200, response);
      return expect(this.client.healthCheck.listAllHealthChecks()).to.eventually.deep.equal(response);
    });
  });
});
