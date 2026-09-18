<?php require_once __DIR__ . '/includes/utils/assets.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About &mdash; Cartelux</title>
  <meta name="description" content="Cartelux was founded in 2012 and has grown into an adtech platform that helps global brands stay locally relevant. Meet the team behind it.">

  <link rel="icon" href="images/cartelux-logo.png" type="image/svg+xml">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="<?php echo asset_url('css/site.css'); ?>">
</head>
<body>

  <?php include __DIR__ . '/includes/header.php'; ?>

  <main id="main">
    <?php include __DIR__ . '/includes/about-hero.php'; ?>
    <?php include __DIR__ . '/includes/about-story.php'; ?>
    <?php include __DIR__ . '/includes/about-quote.php'; ?>
    <?php include __DIR__ . '/includes/about-beliefs.php'; ?>
    <?php include __DIR__ . '/includes/about-team.php'; ?>
  </main>

  <?php include __DIR__ . '/includes/footer.php'; ?>

  <script src="<?php echo asset_url('js/main.js'); ?>"></script>
</body>
</html>
