import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/display/placeholder.js';

const codeMirror = CodeMirror(document.getElementById('codemirrorContainer')!, {
  lineNumbers: true,
  placeholder: 'Type here!'
});

codeMirror.focus();
