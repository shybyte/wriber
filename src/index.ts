import * as acrolinxSdk from '@acrolinx/sidebar-sdk';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/display/placeholder.js';

const CLIENT_SIGNATURE = 'SW50ZWdyYXRpb25EZXZlbG9wbWVudERlbW9Pbmx5';
const currentUrl = new URL(location.href);

const codeMirror = CodeMirror(document.getElementById('codemirrorContainer')!, {
  lineNumbers: true,
  placeholder: 'Type here!',
  extraKeys: {Tab: false}
});

codeMirror.focus();

const useLocalApiAndSidebar = currentUrl.pathname && currentUrl.pathname.indexOf('wriber') > 0;

const acrolinxPlugin = new acrolinxSdk.AcrolinxPlugin({
  sidebarContainerId: 'sidebarContainer',
  clientSignature: CLIENT_SIGNATURE,
  sidebarUrl: useLocalApiAndSidebar ? '/sidebar/v14/' : undefined,
  serverAddress: useLocalApiAndSidebar ? '/' : undefined,
  clientComponents: [
    {
      id: 'wriber',
      name: 'Wriber',
      version: '1.2.3.4',
      category: 'MAIN'
    }
  ]
});

acrolinxPlugin.registerAdapter(new acrolinxSdk.CodeMirrorAdapter({
  editor: codeMirror,
  format: 'TEXT'
}));
acrolinxPlugin.init();

if (currentUrl.searchParams) {
  const text = currentUrl.searchParams.get('text');
  if (text) {
    codeMirror.setValue(text)
  }
}
