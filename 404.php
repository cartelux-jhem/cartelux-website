<?php
require_once __DIR__ . '/includes/utils/assets.php';
// Served for missing URLs at any depth, so asset paths must be root-absolute.
$asset_base = '/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Not Found &mdash; Cartelux</title>
  <meta name="description" content="The page you're looking for doesn't exist or has moved.">
  <meta name="robots" content="noindex, follow">

  <link rel="icon" href="/images/cartelux-logo.png" type="image/svg+xml">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet"></noscript>

  <link rel="stylesheet" href="/<?php echo asset_url('css/site.css'); ?>">
</head>
<body>

  <?php include __DIR__ . '/includes/header.php'; ?>

  <main id="main">
    <section class="demo-banner">
      <div class="wrap">
        <p class="eyebrow eyebrow--light">404</p>
        <h1>Page not found</h1>
      </div>
      <div class="demo-banner-divider" aria-hidden="true"></div>
    </section>
    <section class="section error-page">
      <div class="wrap">
        <p>The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.</p>
        <a class="btn btn-primary" href="/">Back to homepage</a>
      </div>
    </section>
  </main>

  <?php include __DIR__ . '/includes/footer.php'; ?>

  <script src="/<?php echo asset_url('js/main.js'); ?>"></script>
</body>
</html>
