defineClass('KLLoginView', {
  clickedLoginAction: function() {
   var alert = require('UIAlertController').alertControllerWithTitle_message_preferredStyle('Alert', '', 1);
   require('KLHelper').currentNavigationController().presentViewController_animated_completion(alert, true, null);
  }
})
