<?php

class RandomImagePath
{
  /**
   * @var string
   */
  protected $_directoryPath = '';

  /**
   * @var string[]
   */
  protected $_imagePaths = array();

  /**
   * @var int
   */
  protected $_index = 0;

  public function __construct($directory)
  {
    $this->_directoryPath = $directory;
    $this->_initImages();
  }

  protected function _initImages()
  {
    $this->_populateImagePaths();
    $this->_randomizeImageList();
  }

  protected function _populateImagePaths()
  {
    $imagePaths = scandir($this->_directoryPath, 1);
    if ($imagePaths) {
      $numImages = count($imagePaths) - 2;
      if ($numImages > 0) {
        $this->_imagePaths = array_slice($imagePaths, 0, $numImages);
      }
    }
  }

  protected function _randomizeImageList()
  {
    shuffle($this->_imagePaths);
    $this->_index = 0;
  }

  /**
   * @return bool
   */
  public function hasImages()
  {
    return $this->getImageCount() > 0;
  }

  /**
   * @return int
   */
  public function getImageCount()
  {
    return count($this->_imagePaths);
  }

  /**
   * @return string|null
   */
  public function getNextRandomImagePath()
  {
      if (!$this->hasImages()) {
        return null;
      }
      if ($this->_index >= $this->getImageCount()) {
        $this->_randomizeImageList();
      }
      return $this->_directoryPath . '/' . $this->_imagePaths[$this->_index++];
  }
}
