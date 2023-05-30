/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  it('displays 2 paragraphs', () => {
    const view = new View();
    
    expect(document.querySelectorAll('p').length).toBe(2);
  });
  
  it('should add a new note and expect 3 notes', () => {
    const view = new View();
    view.addParagraph();
    expect(document.querySelectorAll('p').length).toBe(3);
  });
  
  it('it should clear all paragraphs and expect 0', () => {
    const view = new View();
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);

  })
});