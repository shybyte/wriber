import * as acrolinxSdk from '@acrolinx/sidebar-sdk';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/display/placeholder.js';

const codeMirror = CodeMirror(document.getElementById('codemirrorContainer')!, {
  lineNumbers: true,
  placeholder: 'Type here!',
  extraKeys: {Tab: false}
});

codeMirror.focus();

const CLIENT_SIGNATURE = 'SW50ZWdyYXRpb25EZXZlbG9wbWVudERlbW9Pbmx5';

const acrolinxPlugin = new acrolinxSdk.AcrolinxPlugin({
  sidebarContainerId: 'sidebarContainer',
  clientSignature: CLIENT_SIGNATURE,
  clientComponents: [
    {
      id: 'wriber',
      name: 'Wriber',
      version: '1.2.3.4',
      category: 'MAIN'
    }
  ]
});

acrolinxPlugin.registerAdapter(new acrolinxSdk.CodeMirrorAdapter({editor: codeMirror}));
acrolinxPlugin.init();
