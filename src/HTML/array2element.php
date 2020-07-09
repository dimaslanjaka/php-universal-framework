<?php

namespace HTML;

use SmartDOMDocument;

class array2element
{
  public function select(array $data, array $attributes = [], array $options = [])
  {
    $dom = new SmartDOMDocument();
    if (!isset($options['selected'])) {
      $options['selected'] = null;
    }
    $select = $dom->createElement('select');
    foreach ($attributes as $key => $val) {
      $select->setAttribute($key, $val);
    }
    foreach ($data as $opt) {
      $option = $dom->createElement('option', $opt);
      $option->setAttribute('value', $opt);
      if ($options['selected'] == $opt) {
        $option->setAttribute('selected', 'selected');
      }
      $select->appendChild($option);
    }
    $dom->appendChild($select);

    return $dom->saveHTML();
  }
}
