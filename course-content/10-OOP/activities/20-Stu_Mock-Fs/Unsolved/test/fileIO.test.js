const FileIO = require('../fileIO');
const fs = require('fs');

jest.mock('fs');


describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fileIO = new FileIO();
      const file = 'message.txt';

    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
