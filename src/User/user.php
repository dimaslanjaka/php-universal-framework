<?php

namespace User;

use Crypto\crypt;
use DB\pdo;
use JSON\json;

class user
{
  public $dbname = 'userdata';
  private $id;
  private $username;
  private $password;
  private $role;
  private $user;
  /**
   * PDO instance.
   *
   * @var \DB\pdo
   */
  private $pdo = null;
  private $db = ['user', 'pass', 'dbname', 'host', 'charset'];

  public function __construct($user = 'root', $pass = '', $db = 'darkit', $host = 'localhost', $charset = 'utf8mb4')
  {
    if (!empty($user) && !empty($db)) {
      $this->db = [
        'user' => $user,
        'pass' => $pass,
        'dbname' => $db,
        'host' => $host,
        'charset' => $charset,
      ];
      $this->pdo = new \DB\pdo($user, $pass, $db, $host, $charset);
      $this->pdo->connect($user, $pass, $db, $host, $charset);
    }
  }

  public function db($data)
  {
    if (isset($this->db[$data])) {
      return $this->db[$data];
    }
  }

  public function getUsers()
  {
    if (!$this->pdo) {
      throw new \MVC\Exception('Database not properly configured', 1);
    }
    $result = [];
    $users = $this->pdo->select($this->dbname)->row_array();
    if (!\ArrayHelper\helper::isSequent($users)) {
      $result[] = $users;
    } else {
      $result = $users;
    }

    return $result;
  }

  public function pdo_instance()
  {
    return $this->pdo;
  }

  public $admin_pattern = '/^superadmin$/s';
  private static $_instance = null;

  /**
   * Chain.
   *
   * @return $this
   */
  public static function getInstance()
  {
    if (null === self::$_instance) {
      self::$_instance = new self();
    }

    return self::$_instance;
  }

  public static function get_admin_pattern()
  {
    return self::getInstance()->admin_pattern;
  }

  /**
   * Check current user is superadmin.
   *
   * @return bool
   */
  public function is_admin()
  {
    if ($this->is_login()) {
      return preg_match($this->admin_pattern, $this->get_role());
    }
  }

  public function admin_required()
  {
    if (!$this->is_admin()) {
      \MVC\router::safe_redirect('/signin');
      exit;
    }
  }

  public function get_role()
  {
    return isset($_SESSION['login']['role']) ? $_SESSION['login']['role'] : 'UNAUTHORIZED';
  }

  public function userdata(string $what)
  {
    $m3 = new \Indosat\api();
    $m3->setdata('login', \ArrayHelper\helper::unset($_SESSION['login'], ['password']));
    if ($this->is_login()) {
      if ('all' == $what) {
        return \ArrayHelper\helper::unset($_SESSION['login'], ['password']);
      }
      if (isset($_SESSION['login'][$what])) {
        return $_SESSION['login'][$what];
      }
    }
  }

  public function update_last_seen()
  {
    if ($this->is_login()) {
      $currentUsername = $this->userdata('username');
      $run = $this
        ->pdo
        ->query("UPDATE `userdata` SET `last_seen` = NOW() WHERE `username` = '{$currentUsername}';")
        ->exec();

      return $run;
    }
  }

  public function update_password($id, $pass)
  {
    if (!$this->pdo) {
      throw new \MVC\Exception('Database not properly configured', 1);
    }
    $db = $this->dbname;
    $crypt = new crypt();
    $pass = $crypt->encrypt('dimaslanjaka', $pass);
    if (!$this->is_admin()) {
      $q = "UPDATE `$db` SET `password` = :pass WHERE `$db`.`id` = :id AND `$db`.`role` <> 'superadmin' AND `$db`.`role` <> 'admin';";
    } else {
      $q = "UPDATE `$db` SET `password` = :pass WHERE `$db`.`id` = :id;";
    }
    $this->pdo->SQL_Exec($q, ['id' => $id, 'pass' => $pass]);
    $result = [];
    $chk = $this->pdo->SQL_Fetch("SELECT * FROM `$db` WHERE `$db`.`id` = :id AND `$db`.`password` = :pass", ['id' => $id, 'pass' => $pass]);
    if (!empty($chk) && isset($chk['id'])) {
      $result['error'] = false;
      $result['message'] = 'Password changed successfully';
      $result['title'] = 'User information';
    } else {
      $result['error'] = true;
    }
    $result = $this->hide_additional(array_merge($result, $chk));

    return $result;
  }

  public function delete_user_by_id($id)
  {
    $db = $this->dbname;
    $q = "DELETE FROM `$db` WHERE `$db`.`id` = :id";
    $this->pdo->SQL_Exec($q, ['id' => $id]);
  }

  public function login_required()
  {
    if (!$this->is_login()) {
      \MVC\router::safe_redirect('/signin');
    }
  }

  public function login($username, $password)
  {
    if (!$this->pdo) {
      throw new \MVC\Exception('Database not properly configured', 1);
    }
    if ('GET' == $_SERVER['REQUEST_METHOD']) {
      $username = urldecode($username);
      $password = urldecode($password);
    }
    $username = addslashes($username);
    $db = $this->dbname;
    $password = addslashes($password);
    $crypt = new crypt();
    $password = $crypt->encrypt('dimaslanjaka', $password);

    $query = "SELECT * FROM `$db` WHERE username=:username AND password=:password";
    //var_dump($username, $password, $query);
    $exec = $this->pdo->SQL_Fetch($query, ['username' => $username, 'password' => $password]);
    //var_dump($this->pdo, $exec);
    $result = [];
    if (!empty($exec)) {
      if (isset($exec['id'])) {
        $result['error'] = false;
        $result['success'] = true;
        $result['message'] = 'login successful';
        $result = array_merge($exec, $result);
        $id = $exec['id'];
        $query = "UPDATE `$db` SET `last_login` = now() WHERE `$db`.`id` = $id;";
        foreach ($exec as $key => $value) {
          $_SESSION['login'][$key] = $value;
        }
        $this->pdo->SQL_Exec($query);
      } else {
        //var_dump($exec);
        $result['error'] = true;
      }
    } else {
      $result['error'] = true;
      $result['message'] = 'Empty response from database';
    }
    $result = $this->hide_additional($result);

    $this->user = $result;
    $this->pdo->resetQuery();
    $result['title'] = 'login information';

    return $result;
  }

  /**
   * Hidding additional information into backend response.
   *
   * @param array $result
   *
   * @author DimasLanjaka <dimaslanjaka@gmail.com>
   *
   * @return array
   */
  public function hide_additional($result)
  {
    if (isset($result['role'])) {
      unset($result['role']);
    }
    if (isset($result['number'])) {
      unset($result['number']);
    }
    if (isset($result['password'])) {
      unset($result['password']);
    }
    if (isset($result['id'])) {
      unset($result['id']);
    }

    return $result;
  }

  /**
   * Check Login.
   *
   * @author Dimaslanjaka <dimaslanjaka@gmail.com>
   *
   * @param Function $callback
   */
  public function check_login($callback)
  {
    if (isset($_SESSION['login'])) {
      if (isset($_SESSION['login']['id']) && is_numeric($_SESSION['login']['id'])) {
        if (is_callable($callback)) {
          call_user_func($callback, \ArrayHelper\helper::unset($_SESSION['login'], ['password']));
        }
      }
    } else {
      if (is_callable($callback)) {
        call_user_func($callback, [
          'error' => true,
          'message' => 'User Login required. Please relogin from login page',
          'unauthorized' => true,
        ]);
      }
    }
  }

  public function is_login()
  {
    //var_dump($_SESSION['login']);
    return isset($_SESSION['login']) ? true : false;
  }

  /**
   * Update Display Name.
   *
   * @param Number $id
   * @param string $display
   */
  public function update_display_name($id, $display)
  {
    if (!$this->pdo) {
      throw new \MVC\Exception('Database not properly configured', 1);
    }
    $db = $this->dbname;
    $q = "UPDATE `$db` SET `display_name` = :name WHERE `$db`.`id` = :id;";
    $this->pdo->SQL_Exec($q, ['name' => $display, 'id' => $id]);
    $chk = $this->pdo->SQL_Fetch("SELECT `$db` WHERE `$db`.`id` = :id AND `display_name` = :name;", ['id' => $id, 'name' => $display]);
    $this->json($chk);
  }

  public function update_role($id, $role, $rgx = '/^(admin|client|superadmin)$/s')
  {
    if (!$this->pdo) {
      throw new \MVC\Exception('Database not properly configured', 1);
    }
    if (!preg_match($rgx, $role)) {
      throw new \MVC\Exception('Error Processing Change Role Request', 1);
    }
    $chk = [
      'error' => true,
      'message' => 'insufficient privileges',
    ];
    if ($this->is_admin()) {
      $db = $this->dbname;
      $q = "UPDATE `$db` SET `role` = :role WHERE `$db`.`id` = :id;";
      $this->pdo->SQL_Exec($q, ['role' => $role, 'id' => $id]);
      $chk = $this->pdo->SQL_Fetch("SELECT * FROM `$db` WHERE `$db`.`id` = :id AND `role` = :role;", ['id' => $id, 'role' => $role]);
      if (isset($chk['id'])) {
        $chk['error'] = false;
      }
    }

    return $chk;
  }

  public function register($username, $password, $name = 'user', $role = 'client')
  {
    if ('GET' == $_SERVER['REQUEST_METHOD']) {
      $username = urldecode($username);
      $password = urldecode($password);
    }
    $username = addslashes($username);
    $password = addslashes($password);
    $crypt = new crypt();
    $password = $crypt->encrypt('dimaslanjaka', $password);
    $db = $this->dbname;
    $q = "INSERT INTO `$db` (`display_name`, `username`, `password`, `role`) VALUES (:name, :username, :password, :role);";
    $exec = $this->pdo->SQL_Exec($q, ['name' => $name, 'username' => $username, 'password' => $password, 'role' => $role]);
    $result = [];
    if (isset($exec['id'])) {
      $chk = $this->pdo->SQL_Fetch("SELECT * FROM `$db` WHERE `$db`.`username` = :username AND `$db`.`password` = :password", ['username' => $username, 'password' => $password]);
      $result['success'] = true;
      $result = $this->hide_additional(array_merge($result, $chk));
    }

    return $result;
  }

  /**
   * JSON formatter.
   *
   * @param array $data
   * @param bool  $header
   * @param bool  $print
   */
  public function json($data = [], $header = true, $print = true)
  {
    return json::json($data, $header, $print);
  }
}