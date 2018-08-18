import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Wedding from '../bundles/HelloWorld/components/Wedding';
import Tables from '../bundles/HelloWorld/components/Tables';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Wedding,
  Tables
});
