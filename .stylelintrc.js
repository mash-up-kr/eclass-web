module.exports = {
  extends: ['stylelint-config-rational-order'],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'no-descending-specificity': null,
    'value-list-comma-newline-after': 'always-multi-line',
    'max-nesting-depth': 4,
    'color-hex-length': 'long',
    'value-keyword-case': null,
    'no-invalid-position-at-import-rule': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
    'property-no-unknown': null,
    'declaration-colon-newline-after': null,
    'function-name-case': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
      },
    ],
  },
};
