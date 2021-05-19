<?php namespace Clean\PhpDocMd\Markdown\GitHub;

use Clean\View\Phtml;
use stdClass;

class Readme extends Phtml
{
    private $links;

    public function __construct($title)
    {
        $this->links = new stdClass;
        $this->set('title', $title);
        $this->set('toc', $this->links);
        $this->setTemplate(__DIR__ . '/../tpl/github.readme.phtml');
    }

    public function addLink($name, $mdPath)
    {
        $this->links->$name = $mdPath;
        return $this;
    }
}
