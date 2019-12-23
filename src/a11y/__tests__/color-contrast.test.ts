import * as A11y from '..'

describe('A11y Color Contrast', () => {
  describe('getComplianceLevel()', () => {
    it('should return an empty string', () => {
      expect(A11y.getComplianceLevel(null as unknown as number)).toBe('');
      expect(A11y.getComplianceLevel(undefined as unknown as number)).toBe('');
    });

    it('should return a not compliant level', () => {
      expect(A11y.getComplianceLevel(4.4)).toBe('not compliant');
      expect(A11y.getComplianceLevel(4)).toBe('not compliant');
      expect(A11y.getComplianceLevel(3)).toBe('not compliant');
      expect(A11y.getComplianceLevel(2)).toBe('not compliant');
      expect(A11y.getComplianceLevel(1)).toBe('not compliant');
    });

    it('should return a AA compliant level', () => {
      expect(A11y.getComplianceLevel(6.9)).toBe('AA');
      expect(A11y.getComplianceLevel(6)).toBe('AA');
      expect(A11y.getComplianceLevel(5)).toBe('AA');
      expect(A11y.getComplianceLevel(4.8)).toBe('AA');
      expect(A11y.getComplianceLevel(4.5)).toBe('AA');
    });

    it('should return a AAA compliant level', () => {
      expect(A11y.getComplianceLevel(7)).toBe('AAA');
      expect(A11y.getComplianceLevel(8)).toBe('AAA');
      expect(A11y.getComplianceLevel(9)).toBe('AAA');
    });
  });
})
