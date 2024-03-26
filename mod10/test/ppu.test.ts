import { expect } from 'chai';
import Bison from '../src/ppu';

describe('Test Bison Class', () => {
    it('should return a sum', () => {
        //arrange
        const calc = new Bison();
        //acct
        const result = calc.add(2,4);
        //assert
        expect(result).to.equal(6);
    });
});