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

  /**
   * Supported options:
   * - fileExtentions: An array of file extensions. e.g.
   *   fileExtentions => ['jpeg', 'jpg', 'png', 'gif']
   *
   * @var array
   */
   protected $_options = array();

  public function __construct($directory, $options = array())
  {
    $this->_directoryPath = $directory;
    $this->_options = $options;
    $this->_initImages();
  }

  protected function _initImages()
  {
    $this->_populateImagePaths();
    $this->_randomizeImageList();
  }

  protected function _populateImagePaths()
  {
    $fileExtensions = '';
    if (isset($this->_options['fileExtentions'])) {
      $fileExtensions = '{' . implode(',', $this->_options['fileExtentions']) . '}';
    }

    $imagePaths = glob($this->_directoryPath . '/*.' . $fileExtensions, GLOB_BRACE);

    $this->_imagePaths = $imagePaths;
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
      return $this->_imagePaths[$this->_index++];
  }
}
