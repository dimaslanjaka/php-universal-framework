<?php
user()->admin_required('../../user/login');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (user()->is_admin()) {
    if (isset($_POST['userdata'])) {
      if (isset($_POST['userdata']['role'])) {
        $Roles = array_merge(['superadmin'], array_values(array_filter($_POST['userdata']['role'])));
        $modify = \DB\schema::modify_enumset_values(pdo(), 'userdata', 'role', $Roles);
        if (isset($modify['error'])) {
          if (!$modify['error']) {
            $modify['message'] = 'User role updated successfully';
          } else {
            $modify['message'] = 'User role update failed';
          }
        }
        e($modify);
      }
    }
  }
}