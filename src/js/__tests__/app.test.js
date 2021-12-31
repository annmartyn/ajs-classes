import Character from '../app.js';

test('wrong type', () => {
    const char = () => new Character('Harry', 'Knight');
    expect(char).toThrow('wrong type');
});

test('wrong name', () => {
    const char = () => new Character('HarryCoolestZombie', 'Daemon');
    expect(char).toThrow('wrong name');
})
