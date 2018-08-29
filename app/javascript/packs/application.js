import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Wedding from '../bundles/HelloWorld/components/Wedding';
import Tables from '../bundles/HelloWorld/components/Tables';
import Coupon from '../bundles/HelloWorld/components/Coupon';
import MyCoupons from '../bundles/HelloWorld/components/MyCoupons';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Wedding,
  Tables,
  Coupon,
  MyCoupons
});
