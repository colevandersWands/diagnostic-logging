los
* writing functions that log or not with an extra flag argument
* the testing function that works with this

this won't be required, but we'll introduce it as a technique to keep in mind for now or later

_diagnostic logging_ is when you log only to find out what went wrong.  the testing function called run\_tests\_diagnostic has the same arguments and run\_tests, except it expects your function to have a "log" _flag_ argument that causes it to return a log instead of a result.  when a test case fails, it will log the full report instead of just the failing result.

this differs from the _strategic logging_ you will do in most of this week's exercises.  in _strategic logging_ you will log for every test case in order to study the code's strategy 