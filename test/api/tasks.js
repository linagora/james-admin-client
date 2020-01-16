const expect = require('chai').expect;

describe('tasks.js', function() {
  describe('#getTask()', function() {
    it('should send GET request to get a task detail', function() {
      const task = {
        taskId: '3294a976-ce63-491e-bd52-1b6f465ed7a2',
        additionalInformation: {},
        status: 'completed'
      };

      this.mock.onGet('/task/3294a976-ce63-491e-bd52-1b6f465ed7a2').reply(200, task);

      expect(this.client.getTask('3294a976-ce63-491e-bd52-1b6f465ed7a2')).to.eventually.deep.equal(task);
    });
  });
});
