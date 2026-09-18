<?php require_once __DIR__ . '/includes/utils/assets.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cartelux &mdash; Adtech for retail networks</title>
  <meta name="description" content="Cartelux empowers automotive retailers to create and measure hyper-local, brand-compliant digital marketing campaigns in less than 60 seconds.">

  <link rel="icon" href="images/cartelux-logo.png" type="image/svg+xml">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="<?php echo asset_url('css/site.css'); ?>">
</head>
<body>

  <?php include __DIR__ . '/includes/header.php'; ?>

  <main id="main">
    <?php include __DIR__ . '/includes/hero.php'; ?>
    <?php include __DIR__ . '/includes/stats.php'; ?>
    <?php include __DIR__ . '/includes/features.php'; ?>
    <?php include __DIR__ . '/includes/testimonials.php'; ?>
    <?php include __DIR__ . '/includes/cta.php'; ?>
  </main>

  <?php include __DIR__ . '/includes/footer.php'; ?>

  <script src="<?php echo asset_url('js/main.js'); ?>"></script>
</body>
</html>
