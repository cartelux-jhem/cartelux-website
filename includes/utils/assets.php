<?php
function asset_url($path) {
    $full = __DIR__ . '/../../' . $path;
    $v = @filemtime($full);
    return $path . ($v ? '?v=' . $v : '');
}
