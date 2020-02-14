import * as A11y from '..'

describe('A11y Color Contrast', () => {
  describe('getContrastLevel()', () => {
    it('should return an empty string', () => {
      expect(A11y.getContrastLevel(null as unknown as number)).toBe('');
      expect(A11y.getContrastLevel(undefined as unknown as number)).toBe('');
    });

    it('should return a not compliant level', () => {
      expect(A11y.getContrastLevel(4.4)).toBe('');
      expect(A11y.getContrastLevel(4)).toBe('');
      expect(A11y.getContrastLevel(3)).toBe('');
      expect(A11y.getContrastLevel(2)).toBe('');
      expect(A11y.getContrastLevel(1)).toBe('');
    });

    it('should return a AA compliant level', () => {
      expect(A11y.getContrastLevel(6.9)).toBe('AA');
      expect(A11y.getContrastLevel(6)).toBe('AA');
      expect(A11y.getContrastLevel(5)).toBe('AA');
      expect(A11y.getContrastLevel(4.8)).toBe('AA');
      expect(A11y.getContrastLevel(4.5)).toBe('AA');
    });

    it('should return a AAA compliant level', () => {
      expect(A11y.getContrastLevel(7)).toBe('AAA');
      expect(A11y.getContrastLevel(8)).toBe('AAA');
      expect(A11y.getContrastLevel(9)).toBe('AAA');
    });
  });
})
