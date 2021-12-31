import Character from '../app.js';

test('checking error - wrong type', () => {
    const char = () => new Character('Harry', 'Knight');
    expect(char).toThrow('wrong type');
});

test('checking error - wrong name', () => {
    const char = () => new Character('HarryCoolestZombie', 'Daemon');
    expect(char).toThrow('wrong name');
})
