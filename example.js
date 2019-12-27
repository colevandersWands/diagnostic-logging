let test_cases = [
  {name: 'alternating', args: [true, false, true, false, true], expected: false},
  {name: 'all true', args: [true, true, true, true, true], expected: false},
  {name: 'all false', args: [false, false, false, false, false], expected: false},
  {name: 'all false', args: [false, false, false, false, false], expected: true},
  {name: '0, 1, 2, 3, 4', args: [0, 1, 2, 3, 4], expected: 4},
  {name: '0, 1, 2, true, 4', args: [0, 1, 2, true, 4], expected: null},
  {name: 'a, b, c, d, e', args: ['a', 'b', 'c', 'd', 'e'], expected: false},
];



function expansion(a, b, c, d, e, _log) {   const log = [];
                                            if(_log) log.push({a,b,c,d,e});
  const step_1 = a + b;                     if(_log) log.push({op: 'a + b', state: step_1});
  const step_2 = c < d;                     if(_log) log.push({op: 'c < d', state: step_2});
  const step_3 = step_1 == step_2;          if(_log) log.push({op: 'step_1 == step_2', state: step_3});
  const step_4 = step_3 && e;               if(_log) log.push({op: 'step_3 && e', state: step_4});

  return !log ? step_4                      : {result: step_4, log}
};
run_tests_diagnostic(expansion, test_cases)




function run_tests_diagnostic(_target, _cases) {
  for (let t_case of _cases) {
    let expected = t_case.expected;

    let actual = _target(...t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n`);
      console.log(`   actual: ${typeof actual},`, _target(...t_case.args, true));
      console.log(`   expected: ${typeof expected},`, expected);
    };
  };
};
